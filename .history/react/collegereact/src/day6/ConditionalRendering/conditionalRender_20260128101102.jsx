import React, {useState} from 'react'

const ConditionalRender = () => {
    const [age, setAge] = useState(20)
  return (
    <div>
        <h1>Conditional Rendering Examples</h1>
        {age > 40 ? <></>}
    </div>
  )
}

export default ConditionalRender
