import React from 'react'
import '../Sass/Header.scss'
import {Link, useNavigate} from 'react-router-dom'
import {FaBabyCarriage} from 'react-icons/fa'
import { connect } from 'react-redux'
import { auth } from './firebase'

function Header({
    user,
    basket
}) {
    const navigate=useNavigate()
    
    const toggler=()=>{
        const toggler=document.getElementsByClassName('capture-navbar')
        toggler[0].classList.toggle('collapse')
    }
    const clickHandler=(event)=>{
        if(user){
            auth.signOut()
            navigate('/')
        }
        const toggler=document.getElementsByClassName('capture-navbar')
        if(!toggler[0].classList.contains('collapse')){
            toggler[0].classList.toggle('collapse')
        }
    }
    const togglerExtra=()=>{
        const toggler=document.getElementsByClassName('capture-navbar')
        if(!toggler[0].classList.contains('collapse')){
            toggler[0].classList.toggle('collapse')
        }
    }
  return (
    <nav className='navbar bg-dark navbar-expand-lg navbar-dark'>
        <div className='navbar-brand' onClick={togglerExtra}><Link className='link' to='/'>The Elegant Apparels</Link></div>
        <button onClick={toggler} className='navbar-toggler' data-toggle='collapse' data-target='#collapsible'>
            <span className='navbar-toggler-icon'>
            </span>
        </button>
        <div className='navbar-collapse capture-navbar collapse'>
            <ul className='navbar-nav'>
                <li className='nav-item' onClick={togglerExtra}><Link className='nav-link men' to='/idealFor/Men'>Men
            
                </Link></li>
                <li className='nav-item' onClick={togglerExtra}><Link className='nav-link women' to='/idealFor/Women'>Women
                
                </Link></li>
                {/* <li className='nav-item'><Link className='nav-link kids' to='/idealFor/Kids'>Kids
                
                </Link></li>
                <li className='nav-item'><Link className='nav-link living' to='/idealFor/Living'>Living
                
                </Link></li> */}
            </ul>
            <ul className='navbar-nav'>
                {(user?.email==='yogesh@admin.com')?(
                    <li className='nav-item' onClick={togglerExtra}><Link className='nav-link' to='/upload-product'>Upload product</Link></li>
                ):null}
                <li className='nav-item user-name' onClick={togglerExtra}>Hi {user?user?.email.split('@')[0]:'guest'} !</li>
                <li onClick={clickHandler} className='nav-item'><Link className='nav-link' to={!user && '/login'}>{user?'Sign out':'Sign in'}</Link></li>
                <li className='nav-item' onClick={togglerExtra}><Link className='nav-link' to={user?'/orders':'/login'}>Orders</Link></li>
                <li className='nav-item' onClick={togglerExtra}><Link className='nav-link' to={user?'/basket':'/login'}><FaBabyCarriage /><span className='cart-number'>{basket.length}</span></Link></li>
            </ul>
        </div>
    </nav>
  )
}
const mapStateToProps=state=>{
    return{
        user:state.user,
        basket:state.basket
    }
}
export default connect(mapStateToProps)(Header)