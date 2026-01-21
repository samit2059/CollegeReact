import React from 'react'

const Second = () => {
  // Task 2: Create a simple event handler for a button
  let handleInput = (e) =>{
    console.log(e.target.value);
    e.target.style.color = "red";
  }
  let handleBtn = (e) =>{
    console.log("button clicked");
    console.log(e.target);
  }
  return (
    <div>
      <h2>Second Component</h2>
      <input type="text" placeholder='Enter Name ' onChange={handleInput}/>
      <button onClick={handleBtn}>Click Me</button>
    </div>
  )
}

export default Second
