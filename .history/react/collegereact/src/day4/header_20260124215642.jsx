import React from 'react'
import Logo from '../assets/Logo.png'
const Header = () => {
  return (
    <div>
      <header>
        <img src={Logo} alt="nothing" wi/>
        <div>
            <nav>
            <a href="#">Home</a>
            <a href="/a">About Me</a>
            <a href="/b">Contact Us</a>
        </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
