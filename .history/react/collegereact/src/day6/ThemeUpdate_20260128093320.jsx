import React from 'react'
import { useState } from 'react'
const ThemeUpdate = () => {
  const [Darkmode, setDarkmode] = useState(false);
  return (
    <div >
      <h1>updating theme</h1>
      <div className="card bg-amber-800 h-[400" />
      <h1>This is a card</h1>
    </div>
  )
}

export default ThemeUpdate
