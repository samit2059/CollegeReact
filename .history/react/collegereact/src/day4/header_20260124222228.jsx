import React from 'react'
import Logo from '../assets/Logo.png'
const Header = () => {
    const fruit = ['apple', 'banana', 'orange', 'pineapple'];
  return (
    <div>
    <div className='flex bg-amber-400'>
      <header className='flex justify-around items-center px-10 gap-10'>
        <div>
            <img src={Logo} alt="nothing" width={40} height={40}/>
        </div>
        <div className='!ml-auto flex gap-6 rounded-lg bg-amber-400 '>
            {/* <nav> */}
            <a href="#">Home</a>
            <a href="/a">About Me</a>
            <a href="/b">Contact Us</a>
        {/* </nav> */}
        </div>
      </header>
</div>
    {fruit.map((fruitsno, index)=>(
        <li key={fruitsno}>{fruitsno}</li>
))}

    </div>
  )
}

export default Header
