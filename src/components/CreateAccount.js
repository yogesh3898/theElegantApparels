import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../Sass/CreateAccount.scss'
import { auth } from './firebase'
function CreateAccount() {
  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email,password)
      .then((auth)=>{
        navigate('/')
      })
      .catch((error)=>{
        alert(error.message)
      })
  }
  return (
    <div className='create-account'>
        <div className='create-account-container'>
            <h1>Create account</h1>
            <form onSubmit={handleSubmit}>
                <h5>E-mail</h5>
                <input type='email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                <h5>Password</h5>
                <input type='password' name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                <h5>Confirm Password</h5>
                <input type='password' name='confirm-password' value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}></input>
                <button className='btn btn-primary'type='submit'>Create Account</button>
            </form>
            <div className='already'>Already have an account? <Link to='/login'>Sign-in</Link></div>
        </div>
    </div>
  )
}

export default CreateAccount