import React from 'react'
import { useState } from 'react'
const ThemeUpdate = () => {
  const btnVariant = {
    "normal":"bg-blue-500 text-white px-2 py-2"
  }
  const [isDarkmode, setDarkmode] = useState(false);
  return (
    <div >
      <h1>updating theme</h1>
      <button onClick={()=>setDarkmode(true)}>Dark</button>
      <button onClick={()=>setDarkmode(false)}>Light</button>
      <div className={`card bg-amber-400 h-[400px] w-[500px] p-[20px] text-center justify-center rounded-lg m-[40px] shadow-amber-300 flex items-center ${isDarkmode ? 'bg-black text-amber-50':""}`}>  
      <h1>This is a card</h1>
    </div>
    </div>
  )
}

export default ThemeUpdate
