import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Sass/IdealForCage.scss'
import ProductCover from './ProductCover'
function IdealForCage() {
  const {idealFor}=useParams()
  const [item,setItem]=useState('')
  useEffect(()=>{
    if(idealFor){
      if(idealFor==='Men'){
        setItem(
          <>
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
        </>
        )
      }
      else if(idealFor==='Women'){
        setItem(
          <>
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
          </>
        )
      }
    }
  },[idealFor])
  return (
    <div className='ideal-for-container'>
      <div className='ideal-for'>{idealFor}'s Collections</div>
        <div className='card-deck'>
          {item}
        </div>
    </div>
  )
}

export default IdealForCage