
import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import '../Sass/SignIn.scss'
import { auth } from './firebase'
import {connect} from 'react-redux'
function SignIn({
    user
}) {
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                navigate('/')
            })
            .catch((error)=>{
                alert(error.message)
            })
    }
  return (
    <div className='login'>
        <div className='login-container'>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <h5>E-mail</h5>
                <input type='email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                <h5>Password</h5>
                <input type='password' name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                <button className='btn btn-primary'>Sign-in</button>
            </form>
            <Link className='link' to='/create-account'>
                <span>Don't have an account?</span>
                <button className='btn btn-dark' type='submit'>
                    Create a new account
                </button>
            </Link>
        </div>
    </div>
  )
}
const mapStateToProps=(state)=>{
    return {
      user:state.user
    }
  }
export default connect(mapStateToProps)(SignIn)