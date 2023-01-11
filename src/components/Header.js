import React from 'react'
import logo from "../images/little-lemon-logos/logo.png";

const Header = () => {
  return (
    <header >
      <img className='logo' src={logo} alt="logo" />
    </header>
  )
}

export default Header