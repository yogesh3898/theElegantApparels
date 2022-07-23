import React, { useEffect,useState } from 'react'
import '../Sass/Product.scss'
import {FaStar} from 'react-icons/fa'
import { connect } from 'react-redux'
import { addToBasket } from '../redux/actions'
import { db } from './firebase'
import { useNavigate } from 'react-router-dom'
function Product({src,title,price,basket,addToBasket,user,orders}) {
  const [added,setAdded]=useState(false)
  const navigate=useNavigate()
  const addToBasketHandler=()=>{
    if(user){addToBasket({
      src:src,
      title:title,
      price:price
    })}
    else{
      navigate('/login')
    }
  }
  return (
    <div className='product'>
        <div className='card'>
        <div className='card-header'>
            <div className='card-title'>{title}</div>
        </div>
        <div className='card-body img-fluid'>
            <img
            src={src}
            className='card-img-top product-cover-img'
            alt='product'
            >
            </img>
        </div>
        <div className='card-footer'>
            <div>Rs {price}</div>
            <button className={'btn btn-light '+orders} onClick={addToBasketHandler}>Add to basket</button>
        </div></div>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return{
    basket:state.basket,
    user:state.user
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    addToBasket:(product)=>dispatch(addToBasket(product))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product)