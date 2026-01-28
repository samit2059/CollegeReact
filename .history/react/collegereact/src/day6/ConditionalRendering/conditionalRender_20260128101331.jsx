import React, {useState} from 'react'

const ConditionalRender = () => {
    const [age, setAge] = useState(20)
  return (
    <div>
        <h1>Conditional Rendering Examples</h1>
        {age > 40 ?<h2>age is greater than 40</h2>: <h2>age is Lesser than 40</h2>}
        {age&}
    </div>
  )
}

export default ConditionalRender
