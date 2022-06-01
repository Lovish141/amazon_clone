import React from 'react'

import {Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCart';
import './Product.css'
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/actions';


const Product = ({id,title,img,price,rating,specification,detail}) => {
    const dispatch=useDispatch();

    const onAddItemToBasket=()=>{
        const item={
            id,title,img,price,rating,specification,detail,
        }
        dispatch(addToBasket(item))
    }
  return (
    <div className="product">
        <div className="info">
            <Link to={`/products/${id}`} className='title'>
                <p>{title}</p>
            </Link>
            <p className="price">
                <strong>$</strong>
                <strong>{price}</strong>
            </p>
            <div className="rating">
                {Array(rating).fill().map((_,index)=>(
                <p key={index}><span role='img' aria-labelledby='' aria-label='star'>⭐</span></p>
                ))}
            </div>
            </div>
            <img src={img} alt="" />
            <button onClick={onAddItemToBasket}>
                <i>
                    <ShoppingCartOutlinedIcon/>
                </i>
                Add To Basket
            </button>
        
    </div>
  )
}

export default Product