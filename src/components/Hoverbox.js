import React from 'react'
import '../Sass/Hoverbox.scss'
import {Link} from 'react-router-dom'
function Hoverbox({category}) {
  return (
    <div className={`hoverbox-dropdown ${category}`}>
        <Link className='link' to='/some'><div className='dropdown'>T-shirt - half sleeve</div></Link>
        <Link className='link' to='/some'><div className='dropdown'>T-shirt - Full sleeve</div></Link>
        <Link className='link' to='/some'><div className='dropdown'>Hoodies</div></Link>
    </div>
  )
}

export default Hoverbox