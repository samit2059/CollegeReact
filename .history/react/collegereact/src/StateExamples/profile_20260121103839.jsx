import { useState } from "react"

let Profile = () =>{
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Profile Page</h1>
            <button onClick={() => setCount(count+1)} className="p-2 m-2 bg-amber-400 font-medium rounded-lg shadow">Click me</button>
            <p>Count : {count}</p>
        </div>
    )
}

export default Profile