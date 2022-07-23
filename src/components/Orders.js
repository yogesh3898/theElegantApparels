import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import '../Sass/Orders.scss'
import Product from './Product'

function Orders({orders}) {
  return (
    <div className='orders-container'>
        {orders && orders.length>0 && orders.map((product)=>{
            return(
                <Product
                src={product.src}
                title={product.title}
                price={product.price}
                orders={true}
                >
                </Product>
            )
        })}
    </div>
    // <div className='card-deck'>
    //     <Product
    //     src={product.src}
    //     title={product.title}
    //     ></Product>
    // </div>
  )
}
const mapStateToProps=(state)=>{
    return{
        orders:state?.orders
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Orders)