import React from 'react'
import './Checkout.css'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../../components/CheckoutProduct.js/CheckoutProduct'
import SubTotal from '../../components/SubTotal/SubTotal'

const Checkout = () => {
    const {basket,user}=useSelector(state=>state.data)
  return (
<div className='checkout'>
<img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/BrandDays/May/ILM/D45580379_WLD_iQOO_ILM_Design-SIM_ILM_640x45._CB636724288_.jpg" alt="" className="checkout-ad" />
   <div className='checkout-inner'>
    <div className="checkout-left">
      <div>
      <h3>Hello,{user?user.email:'guest'}</h3>
      <h2 className='checkout-title'>
          {basket.length === 0?
          'Your Basket is empty':
          "Your Shopping Basket"
          }
      </h2>
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
    </div>
    </div>
   
    <div className="checkout-right">
     <SubTotal/>
    </div>
    </div>
</div>
  )
}

export default Checkout