import React from 'react'
import Logo from '../assets/Logo.png'
const Header = () => {
    const fruit = ['apple', 'banana', 'orange', 'pineapple'];
    const no = 10;
    const car = {
        id:"1000",
        color:"red",
        date:"2082",
    };
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
        <li key={fruitsno}>{index+1} . {fruitsno}</li>
))}

<div>
    task 3 -- no is 
    {no%2 === 0 ? "Even " : "Odd"}
</div>
    Fruit lenghtis = {fruit[2].length}
    <div style={{background:'red'}}>
        {car.id}--{car.color}--{car.date}
    </div>

<input type="text" placeholder='Enter your name' />

<>
<b>7 task </b>
<h1>hello</h1>
<p>nice</p>
</>

{/* hello this is a comment statement */}

<table border={}>
    <tr>
        <th>id</th>
        <th>name</th>
    </tr>
    <tr>
        <th>99</th>
        <th>sam</th>
    </tr>
    <tr>
        <th>202</th>
        <th>abhi</th>
    </tr>
</table>
    </div>
  )
}

export default Header
