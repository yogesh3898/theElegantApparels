import React from 'react'
import '../Sass/ProductCover.scss'
import {Link} from 'react-router-dom'
function ProductCover({title,src,startsFrom,urlParam}) {
  return (
    <div className='product-cover'>
        <Link className='link' to={`/${urlParam}`}>
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
            <div className='card-title'>Starts from Rs {startsFrom}</div>

        </div></div></Link>
    </div>
  )
}

export default ProductCover