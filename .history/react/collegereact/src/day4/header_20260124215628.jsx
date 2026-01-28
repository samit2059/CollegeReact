import React from 'react'
import Logo from '../assets/'
const Header = () => {
  return (
    <div>
      <header>
        <img src="../assets/Logo.png" alt="nothing" />
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
