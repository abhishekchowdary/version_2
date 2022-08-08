import React from 'react';
import "./Header.css";
import  {VscAccount } from 'react-icons/vsc';
import img2 from './images/DBS_Logo.jpg'

function Header() {
  return (
    <div className='header'>
        <img className='header_logo' src={img2} alt='DBS'></img>
        <div className='header_quote'><h2 >Live More Bank Less </h2></div>
        <div className="header_wisher"><h3>Hello, Welcome</h3></div>
        <div className='header_profile'><button><VscAccount/>-Logout</button></div>
    </div>
  )
}

export default Header