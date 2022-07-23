import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../redux/actions'
import '../Sass/Home.scss'
import { db } from './firebase'
import ProductCover from './ProductCover'
function Home({
  products
}) {

  return (
    <div className='home'>
        <div className='home-container'>
            <img
            src='https://img.freepik.com/premium-photo/banner-web-page-cover-template-clothes-rack-glasses-fashion-shop_41418-4112.jpg?w=2000'
            className='home-image'
            alt='background-cover'
            >
            </img>
            <div className='home-row'>
                <div className='card-deck'>
                <ProductCover title="Men's T-shirt (Half sleeve)"
                startsFrom={200}
                urlParam={'Men=>T-shirt(Half-sleeve)'}
                src='https://cdn.dribbble.com/users/61921/screenshots/9634673/media/985b2add2b952f24634b717c4d846bf2.png?compress=1&resize=400x300'
                ></ProductCover>
                <ProductCover
                startsFrom={400}
                urlParam={'Men=>T-shirt(Full-sleeve)'}
                src='https://cdn.dribbble.com/users/61921/screenshots/9634673/media/985b2add2b952f24634b717c4d846bf2.png?compress=1&resize=400x300'
                title="Men's T-shirt (Full sleeve)"></ProductCover>
                <ProductCover
                startsFrom={600}
                urlParam={'Men=>Hoodies'}
                src='https://cdn.dribbble.com/users/61921/screenshots/9634673/media/985b2add2b952f24634b717c4d846bf2.png?compress=1&resize=400x300'
                title="Unisex Hoodies"></ProductCover>
                </div>
            </div>
            <div className='home-row'>
            <div className='card-deck'>
                <ProductCover
                startsFrom={200}
                urlParam={'Women=>T-shirt(Half-sleeve)'}
                src='https://cdn.dribbble.com/users/61921/screenshots/9634673/media/985b2add2b952f24634b717c4d846bf2.png?compress=1&resize=400x300'
                title="Women's T-shirt (Half sleeve)"></ProductCover>
                <ProductCover
                startsFrom={300}
                urlParam={'Women=>T-shirt(Full-sleeve)'}
                src='https://cdn.dribbble.com/users/61921/screenshots/9634673/media/985b2add2b952f24634b717c4d846bf2.png?compress=1&resize=400x300'
                title="Women's T-shirt (Full sleeve)"></ProductCover>
                <ProductCover
                startsFrom={500}
                urlParam={'Women/Salwars'}
                src='https://cdn.dribbble.com/users/61921/screenshots/9634673/media/985b2add2b952f24634b717c4d846bf2.png?compress=1&resize=400x300'
                title="Salwars"></ProductCover>
                </div>
            </div>
        </div>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return{
    products:state?.products
  }
}
const mapDispatchToProps=dispatch=>{
  return{}
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)