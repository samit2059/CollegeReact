import React from 'react'
import { useState } from 'react'
const ThemeUpdate = () => {
  const btnVariant = {
    "normal":"bg-indigo-500 shadow-lg shadow-indigo-500/50 px-4 py-2 rounded-lg mx-2 my-2 focus:outline-none text-white"
  }
  const [isDarkmode, setDarkmode] = useState(false);
  return (
        <h1>updating theme</h1>
    <div className='bg-amber-100 font-serif justify-center px-2 mx-2'>
      
      <div className={`card flex bg-amber-400 h-[400px] w-[500px] p-[20px] text-center justify-center rounded-lg m-[40px] shadow-amber-300 flex items-center ${isDarkmode ? 'bg-black text-amber-50':""}`}>  
      <h1>This is a card</h1>
      <div className=' flex p-[20px]'>
      <button onClick={()=>setDarkmode(true)} className={btnVariant.normal}>Dark</button>
      <button onClick={()=>setDarkmode(false)} className={btnVariant.normal}>Light</button>
      </div>
    </div>
    </div>
  )
}

export default ThemeUpdate
