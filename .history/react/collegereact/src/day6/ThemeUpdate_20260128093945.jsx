import React from 'react'
import { useState } from 'react'
const ThemeUpdate = () => {
  const [isDarkmode, setDarkmode] = useState(false);
  return (
    <div >
      <h1>updating theme</h1>
      <button onClick={()=>setDarkmode(true)}>Dark</button>
      <button onClick={()=>setDarkmode(false)}>Light</button>
      <div className={`card bg-amber-800 h-[400px] w-[500px] p-[20px] text-center justify-center rounded-lg m-[40px] shadow-amber-300 flex items-center ${isDarkmode ? 'bg-black  '}`} />  
      <h1>This is a card</h1>
    </div>
  )
}

export default ThemeUpdate
