import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { payAndOrder, subTotalAction } from '../redux/actions'
import '../Sass/ProceedToCheckout.scss'
import { db } from './firebase'
function ProceedToCheckout({total,subTotalAction,basket,orders,payAndOrder,user}) {
  useEffect(()=>{
        if(!total){
          let localTotal=basket.reduce((initializer,s)=>{
            return initializer+Number(s.price)
          },0)
          subTotalAction(localTotal)
        }
},[basket])
useEffect(()=>{
  db.collection('orders').doc(user?.email).set({
    orders:orders
  })
},[orders])
const payAndOrderHandler=(event)=>{
  event.preventDefault()
  let tem=orders
  if(orders.length>0){
    payAndOrder([...basket,...tem])
  }
  else{
    payAndOrder([...basket])
  }
}
  return (
    <div className='checkout-container'>
        <div className='shipping-address'>
          <h3>Shipping details</h3>
          <form className='form'>
            <div className='form-group'>
              <label className='form-label'>Name</label>
              <input required type='text' className='form-control'></input>
            </div>
            <div className='form-group'>
              <label className='form-label'>Contact No.</label>
              <input required type='number' className='form-control'></input>
            </div>
            <div className='form-group'>
              <label className='form-label'>Address</label>
              <textarea rows='4' required className='form-control'></textarea>
            </div>
            <div className='order-summary'>
          <h3>Total Amount: Rs. {total}</h3>
          <button className='btn btn-dark' onClick={payAndOrderHandler}>Pay and Order</button>
        </div>
          </form>
        </div>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return{
    total:state?.subTotal,
    basket:state?.basket,
    orders:state?.orders,
    user:state?.user
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    subTotalAction:(totalAmount)=>dispatch(subTotalAction(totalAmount)),
    payAndOrder:(orders)=>dispatch(payAndOrder(orders))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProceedToCheckout)