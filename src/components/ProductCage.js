import React, { useEffect,useState } from 'react'
import '../Sass/ProductCage.scss'
import {useParams} from 'react-router-dom'
import Product from './Product'
import {data} from './Data'
import { connect } from 'react-redux'
function ProductCage({products}) {
  const {productType}=useParams()
  const [filProducts,setFilProducts]=useState([])
  useEffect(()=>{
    if(productType){
      let broken=productType.split('=>')
      let a=[]
      products.map((s)=>{
        if(s.idealFor===broken[0]){
          if(s.category===broken[1]){
            a.push(s)
          }
        }
      })
      setFilProducts(a)
    }
  },[products])
  return (
    <div className='product-cage'>
      <div className='up'>{productType}</div>
      <div className='down'>
      {filProducts.length>0 && filProducts?.map((res)=>(
        <Product
        src={res.previewUrl}
        title={res.title}
        price={res.price}
        ></Product>
      ))}</div>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return{
    products:state.products
  }
}
const mapDispatchToProps=dispatch=>{
  return{}
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductCage)