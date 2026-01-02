import { config } from "./task3E.js";

console.log(config)
let getUserFromAPi = async() =>{
    const response = await fetch(https://jsonplaceholder.typicode.com/todos);
    const data = await response.json();
    console.log(data);
}

getUserFromAPi();