import React from 'react';
import './navbar.css'

const Nav1 = () => {
    let handleProfile = () =>{
        console.log("profile clicked");
    }
  return (
    <div className=' !p-8 !my-2 flex bg-amber-600 text-amber-100 justify-between items-center'>
      <h1 >Navbar</h1>
      <div className='menus flex gap-6'>
        <h4 onClick={(e) =>{
            console.log("home clicked");
        }}>Home</h4>
        <h4 onClick={handleProfile}>Profile</h4>
      </div>
    </div>
  )
}

export default Nav1
