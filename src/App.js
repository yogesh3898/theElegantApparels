import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { fetchBasket, fetchOrders, fetchProducts } from './redux/actions'
import Header from './components/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import {initialProductsFetch, loginActionRequest,logoutActionRequest} from './redux/actions'
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount';
import ProductCage from './components/ProductCage';
import { useEffect } from 'react';
import { auth, db } from './components/firebase';
import {connect} from 'react-redux'
import Upload from './components/Upload';
import IdealForCage from './components/IdealForCage';
import Basket from './components/Basket';
import ProceedToCheckout from './components/ProceedToCheckout';
import Orders from './components/Orders';
function App({
  user,
  loginActionRequest,
  logoutActionRequest,
  products,
  fetchBasket,
  basket,
  fetchProducts,
  fetchOrders
}) {
  let snapShotProduct
  let snapShotBasket
  useEffect(()=>{
    if(user?.email){
      db.collection('user')
      .doc(user.email).set({
        basket:basket
      })
    }
  },[basket])
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        loginActionRequest(authUser)
      }
      else{
        logoutActionRequest()
      }
    })
  },[])
  useEffect(()=>{
    if(user){
    db.collection('user').onSnapshot((snapshot)=>{
      snapShotBasket=snapshot
      snapshot.docs.map((doc)=>{
        if(user?.email===doc.id){
          fetchBasket(doc.data()?.basket)
        }
      })
    })
    db.collection('orders').onSnapshot((snapshot)=>{
      snapshot.docs.map((doc)=>{
        if(user?.email===doc.id){
          fetchOrders(doc.data().orders)
        }
      })
    })
  }
    else{
      fetchBasket([])
      fetchOrders([])
    }
  },[user])
  useEffect(()=>{
    db.collection('collections')
    .doc('theElegantApparels')
    .collection('new')
    .onSnapshot((snapshot)=>{
      snapShotProduct=snapshot
      snapshot.docs.map((doc)=>{
        fetchProducts(doc.data().products)
      })
    })
  },[snapShotProduct])
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Routes>
        <Route exact path='/:productType' element={<ProductCage></ProductCage>}></Route>
        <Route exact path='/login' element={<SignIn></SignIn>}></Route>
        <Route exact path='/create-account' element={<CreateAccount></CreateAccount>}></Route>
      <Route exact path='/upload-product' element={<Upload></Upload>}></Route>
      <Route exact path='/idealFor/:idealFor' element={<IdealForCage></IdealForCage>}></Route>
      <Route exact path='/basket' element={<Basket></Basket>}></Route>
      <Route exact path='/checkout' element={<ProceedToCheckout></ProceedToCheckout>}></Route>
      <Route exact path='/orders' element={<Orders></Orders>}></Route>
      <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return {
    user:state?.user,
    products:state?.products,
    basket:state?.basket
  }
}
const mapDispatchToProps=dispatch=>{
  return {
    loginActionRequest:(user)=>dispatch(loginActionRequest(user)),
    logoutActionRequest:()=>dispatch(logoutActionRequest()),
    fetchProducts:(products)=>dispatch(fetchProducts(products)),
    fetchBasket:(products)=>dispatch(fetchBasket(products)),
    fetchOrders:(orders)=>dispatch(fetchOrders(orders))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
