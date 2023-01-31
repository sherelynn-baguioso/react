import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDY2zWehtds8-X7fe7kOpnbW00aSfgcO_c',
  authDomain: 'my-react-blog-8c898.firebaseapp.com',
  projectId: 'my-react-blog-8c898',
  storageBucket: 'my-react-blog-8c898.appspot.com',
  messagingSenderId: '734433186107',
  appId: '1:734433186107:web:1858579e1fb50f8d91a71e',
}

const app = initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
