import React from 'react';
import './navbar.css'

const Nav1 = () => {
  let handleProfile = (e) => {
    e.target.style.color = "red";
    e.target.style.backgroundColor = "black"
    console.log("profile clicked");
    console.log(e.target.style);
    /*
    let event ={
     target:{
        value:"Profile",
        style:{
            color:"red",
            backgroundColor:"black"
        }
     }
    } */
  }
  let handleChangeOnsearch = (e) => {
    console.log(e.target.value);
    // e.target.style.backgroundColor = "black"
    e.target.style.color = "red"
    let l = e.target.value;
    console.log(l.length);
    let random1 = Math.floor(Math.random() * 255);
    let random2 = Math.floor(Math.random() * 255);
    let random3 = Math.floor(Math.random() * 255);

    e.target.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`
    console.log(random1);
    console.log(random2);
    console.log(random3);
  }
  return (
    <div className=' !p-8 !my-2 flex bg-amber-600 text-amber-100 justify-between items-center'>
      <h1 className='navelement'>Navbar</h1>
      <div className='menus flex gap-6'>
        <div className='max-w-md mx-auto '>
            <input placeholder='Search Anything...' onChange={handleChangeOnsearch} className=''/>
        </div>
        <h4 onClick={(e) => {
          console.log("home clicked");
          console.log(e.target);

        }}>Home</h4>
        <h4 onClick={handleProfile}>Profile</h4>
      </div>
    </div>
  )
}

export default Nav1
