import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import CartList from './Components/CartList'
import './Components/StyleSheets/CartList.css'
import { Outlet } from 'react-router-dom'
function App() {
 

  return (
    <>
     <Navbar/>
     <Outlet/>
    </>
  )
}

export default App
