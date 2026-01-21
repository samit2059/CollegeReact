import React from 'react'

const Second = () => {
  // Task 2: Create a simple event handler for a button
  let handleInput = () =>{
    console.log()
  }
  return (
    <div>
      <h2>Second Component</h2>
      <input type="text" placeholder='Enter Name ' onChange={handleInput}/>
    </div>
  )
}

export default Second
