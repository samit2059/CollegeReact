import React from 'react'
import Logo from '../assets/Logo.png'
const Header = () => {
  return (
    <div className='flex '>
      <header className='flex justify-around'>
        <div>
            <img src={Logo} alt="nothing" width={40} height={40}/>
        </div>
        <div className='flex justify-center bg-amber-400'>
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
