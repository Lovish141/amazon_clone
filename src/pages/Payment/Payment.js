import React,{useState,useEffect } from 'react'
import './Payment.css'
import { useSelector,useDispatch } from 'react-redux'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../utils/BasketTotal'
import { Link, useNavigate } from 'react-router-dom'
import { db } from '../../utils/firebase'
import CheckoutProduct from '../../components/CheckoutProduct.js/CheckoutProduct'
import { CardElement,useStripe,useElements } from '@stripe/react-stripe-js'
import  axios  from '../../utils/axios' 



const Payment = () => {
    const {basket,user}=useSelector(state=>state.data)
    const history=useNavigate();
   
   let dispatch=useDispatch();
   const [succeeded,setSucceeded]=useState(false)
   const [processing,setProcessing]=useState('')
   const [error,setError]=useState(null)
   const [disabled,setDisabled]=useState(true)
   const [clientSecret,setClientSecret]=useState(true)

   useEffect(()=>{
       const getClientSecret=async()=>{
           const response=await axios({
               method:'POST',
               url:`/payment/create?totla=${getBasketTotal(basket)*100}`,
           })
           setClientSecret(response.data.clientSecret)
       }
       getClientSecret();
   },[basket])
  const stripe=useStripe();
  const elements=useElements();


    const handleSubmit=async (e)=>{
        e.preventDefault();
        setProcessing(true)
        setSucceeded(true)
        setError(null)
        setProcessing(false)
        history('/orders')
    }
    const handleOnChange=(e)=>{
        setDisabled(e.empty)
        setError(e.error?e.error.message:'')
    }
  return (
    <div className="payment">
        <div className="payment-container">
            <h1>Checkout {<Link to='/checkout'>{basket.length} items</Link>}</h1>
            <div className="payment-section">
                <div className="payment-title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment-address">
                    <p>{user && user.email}</p>
                    <p>House No. 35334 Near Rose garden</p>
                    <p>Ludhiana,Punjab,India</p>
                </div>
            </div>
            <div className="payment-section">
                <div className="payment-title">
                    <h3>Review Items for Delivery</h3>
                </div>
                <div className="payment-items">
                    {basket && basket.map((item)=>(
                        <CheckoutProduct id={item.id}
                        title={item.title}
                        image={item.img}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="payment-section">
                <div className="payment-title">
                    <h3>Payment-method</h3>
                </div>
                <div className="payment-details">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleOnChange}/>
                        <div className='payment-priceContainer'>
                            <CurrencyFormat
                             renderText={
                                (value)=>(
                                    <h3>Order Total : {value}</h3>
                                )
                            }
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing?<p>Processing</p>:"Buy Now"}</span>
                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment