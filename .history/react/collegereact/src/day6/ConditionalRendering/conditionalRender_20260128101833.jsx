import React, {useState} from 'react'

const ConditionalRender = () => {
    const [age, setAge] = useState(20)
    // setAge(40)
  return (
    <div>
        <h1>Conditional Rendering Examples</h1>
        {age > 40 ?<h2>age is greater than 40</h2>: <h2>age is Lesser than 40</h2>}
        {age%2==0 && <b>Age is Even</b>}
        {age>60 || <b>Age is not greater than 60</b>}
        {if}
    </div>
  )
}

export default ConditionalRender
