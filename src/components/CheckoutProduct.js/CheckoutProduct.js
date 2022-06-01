import React from 'react'
import './CheckoutProduct.css'
import {useDispatch} from 'react-redux'
import {  ShoppingCartOutlined } from '@mui/icons-material';
import { removeFromBasket } from '../../redux/actions';

const CheckoutProduct = ({id,title,image,rating,price}) => {
  let dispatch=useDispatch();
  const onremoveItemToBasket=()=>{
   dispatch(removeFromBasket(id));
  }
    return (
    <div className='checkout-product'>
        <img src={image} alt='' className='checkout-product-image'/>
        <div className="checkout-product-info">
            <p className="checkout-product-title">
                {title}
            </p>
            <p className="checkout-product-price">
                <strong>$</strong>
                <strong>{price}</strong>
            </p>
            <div className="checkout-product-rating">
            {Array(rating).fill().map((_,index)=>(
                <p key={index}><span role='img' aria-labelledby='' aria-label='star'>⭐</span></p>
                ))}
            </div>
            <button onClick={onremoveItemToBasket}>
                <i>
                    <ShoppingCartOutlined/>
                </i>
                 Remove from Basket
            </button>
        </div>
    </div>
  )
}

export default CheckoutProduct