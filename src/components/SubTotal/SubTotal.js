import React from 'react'
import './SubTotal.css'
import CurrencyFormat from 'react-currency-format'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getBasketTotal } from '../../utils/BasketTotal'

const SubTotal = () => {
    const {basket,user}=useSelector(state=>state.data)
    let history=useNavigate();
    const handleCheckout=()=>{
        if(user){
            history('/payment')
        }else{
            history('/login')
        }
    }
  return (
    <div className="subtotal">
        <CurrencyFormat renderText={
            (value)=>(
                <div>
                <p>
                    SubTotal({basket.length} items : <strong>{value}</strong>)
                </p>
                <small className='subtotal-gift'>
                    <input type='checkbox'/>
                       This order  contains a gift
                </small>
                </div>
            )
        }
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        />
        <button onClick={handleCheckout}>
            Proceed To Checkout
        </button>
    </div>
  )
}

export default SubTotal