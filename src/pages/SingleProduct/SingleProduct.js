import React from 'react'
import './SingleProduct.css'
import { useParams } from 'react-router-dom'
import {products} from '../../utils/ProductsData'
import Header from '../../components/Header/Header'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/actions'


const SingleProduct = () => {
  let {id}=useParams();
  let singleProduct=products.find((item)=> item.id===id)
  const dispatch=useDispatch();
const onaddItemToBasket=()=>{
const item={
  id:singleProduct.id,
  rating:singleProduct.rating,
  title:singleProduct.title,
  price:singleProduct.price,
  image:singleProduct.image,
  specification:singleProduct.specification,
  detail:singleProduct.detail,
}
dispatch(addToBasket(item))
}
  return (
    <>
   <Header/>
    <div className='single-product-container'>
      <img 
      src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/BrandDays/May/ILM/D45580379_WLD_iQOO_ILM_Design-SIM_ILM_640x45._CB636724288_.jpg" 
      alt="" 
      className="single-product-ad" 
      />
      <div>
        <div className="single-product">
          <img src={singleProduct.image} className='single-product-image' alt="" />
          <div className="single-product-info">
            <div className="single-product-title">
              {singleProduct.title}
            </div>
            <div className="single-product-rating">
            {Array(singleProduct.rating).fill().map((_,index)=>(
                <p key={index}><span role='img' aria-labelledby='' aria-label='star'>⭐</span></p>
                ))}
            </div>
            <p className="single-product-price">
              Price: <strong>$</strong><strong>{singleProduct.price}</strong>
            </p>
            <div className="single-product-specification">
              <h4>Specification</h4>
              {singleProduct.specification && singleProduct.specification.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </div>
            <div className="single-product-description">
              <h4>Product Description</h4>
              <p>{singleProduct.detail}</p>
            </div>
            <button onClick={onaddItemToBasket}>
              <i><ShoppingCartOutlinedIcon/></i>
              Add To Basket
            </button>
          </div> 
        </div>
      </div>

    </div>
    </>
  )
}

export default SingleProduct