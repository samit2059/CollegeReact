import React from 'react'

const Nav1 = () => {
  return (
    <div className='navbar flex bg-amber-600 text-amber-100 justify-between items-center py-6 p-'>
      <h1 >Navbar</h1>
      <div className='menus flex gap-6'>
        <h4>Home</h4>
        <h4>Profile</h4>
      </div>
    </div>
  )
}

export default Nav1
