// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCffh9uNx4SrYq-AX4a9KTzjlY8ClRD1DA",
    authDomain: "theelegantapparels-5e4f0.firebaseapp.com",
    projectId: "theelegantapparels-5e4f0",
    storageBucket: "theelegantapparels-5e4f0.appspot.com",
    messagingSenderId: "1046315315146",
    appId: "1:1046315315146:web:e8261e40e0b510e9baa933",
    measurementId: "G-X7PBNRFXKY"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()
const storage=firebase.storage()
export {db,auth,storage}



