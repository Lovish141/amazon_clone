import React from 'react'
import './Order.css'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../../components/CheckoutProduct.js/CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../utils/BasketTotal'


const Order = () => {
    const {basket,user}=useSelector(state=>state.data)
  return (
<div className="orders">
    <h1>Your Orders</h1>
    <div className="orders-order">
      <h2>Order Details:</h2>
    {basket && basket.map((item)=>
  <CheckoutProduct
   key={item.id}
   id={item.id}
   title={item.title}
   image={item.img}
   price={item.price}
   rating={item.rating}
  />
    )}
    <div className='totalValue'>
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
                            </div>
    </div>
</div>
  )
}

export default Order