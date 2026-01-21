import { useState } from "react"

let Profile = () =>{
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Profile Page</h1>
            <button onClick={() => setCount(count+1)}></button>
        </div>
    )
}

export default Profile