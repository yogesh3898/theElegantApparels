import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../Sass/Basket.scss'
import BasketProduct from './BasketProduct'
import {subTotalAction} from '../redux/actions'
function Basket({basket,user,total,subTotalAction}) {
    const navigate=useNavigate()
    // const [subTotal,setSubTotal]=useState(0)
    useEffect(()=>{
        
        let localTotal=basket.reduce((initializer,s)=>{
            return initializer+Number(s.price)
        },0)
        subTotalAction(localTotal)
    },[basket])
    
  return (
    <div className='basket-container'>
        <div className='checkout'>
            <div className='checkout-body'>
                Sub total - Rs. {total}
            </div>
            <button className='btn btn-warning' onClick={()=>{navigate('/checkout')}}>Proceed to checkout</button>
        </div>
        <div className='basket'>
            <div className='card-deck'>
                {basket.length>0 && basket.map((p)=>{
                    return(
                        <BasketProduct product={p}></BasketProduct>
                    )
                })}
            </div>
        </div>
        
    </div>
  )
}
const mapStateToProps=(state)=>{
    return{
        basket:state?.basket,
        user:state?.user,
        total:state?.subTotal
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        subTotalAction:(totalAmount)=>dispatch(subTotalAction(totalAmount))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Basket)