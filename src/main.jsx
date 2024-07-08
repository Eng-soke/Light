import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import Header from "./Components/Header"
import Light from './Components/Light'

const root = document.querySelector("#root")
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    < Header />
    < Light />
  </div>
 
)
