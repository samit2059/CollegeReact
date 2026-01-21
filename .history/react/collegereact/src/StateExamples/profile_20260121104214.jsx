import { useState } from "react"

let Profile = () =>{
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Profile Page</h1>
            <button onClick={() => setCount(count+1)} className="p-2 m-2 bg-amber-400 font-medium rounded-lg shadow-lg text-white">Click me</button>
            <p className="p-2 text-amber-200 font-">Count : {count}</p>
        </div>
    )
}

export default Profile