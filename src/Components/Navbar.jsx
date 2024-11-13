import React from 'react'
import { useState } from 'react';
import image from '../assets/Images/app_logo.png';
import './StyleSheets/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [login,setlogin] =useState('Login');
  return (
    <div>
      <div className="Header">
        <div className="logo">
          {/* <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" alt="image" /> */}
          <img src= {image} alt="image" />
        </div>
        <div className="nav-items">
           <ul>
           <Link to={'/home'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <li>Cart</li>
            <li>Sign up</li>
            <li onClick={(e)=>{
              console.log(e.target.innerText);
              e.target.innerText==='Login'?setlogin('Logout'):setlogin('Login');
            }}>{login}</li>


           </ul>
        </div>
  
      </div>
    </div>
  )
}

export default Navbar
