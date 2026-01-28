import React from 'react'
import { useState } from 'react'
const ThemeUpdate = () => {
  const [mode, setMode] = useState(false);
  return (
    <div>
      <h1>updating theme</h1>
      <div className="card" />
      <h1>This is a card</h1>
    </div>
  )
}

export default ThemeUpdate
