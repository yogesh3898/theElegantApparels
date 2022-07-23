import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { removeFromBasket } from '../redux/actions';

function BasketProduct({product,basket,removeFromBasket}) {

    const removeFromBasketHandler=()=>{
        let newBasket=basket
        let index=basket.findIndex((p)=>p.src===product.src)
        if(index>=0){
            newBasket.splice(index,1)
            removeFromBasket(newBasket)
        }
    }
  return (
    <div className='card'>
        <div className='card-header'>
            <div className='card-title'>{product.title}</div>
        </div>
        <div className='card-body img-fluid'>
            <img
            src={product.src}
            alt='image'
            >
            </img>
        </div>
        <div className='card-footer'>
            <div>Rs {product.price}</div>
            <button className='btn btn-dark' onClick={removeFromBasketHandler}>Remove from basket</button>
        </div>
    </div>
  )
}
const mapStateToProps=(state)=>{
    return{
        basket:state?.basket
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        removeFromBasket:(products)=>dispatch(removeFromBasket(products))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BasketProduct)