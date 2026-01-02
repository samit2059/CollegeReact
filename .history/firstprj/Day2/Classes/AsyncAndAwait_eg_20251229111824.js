//  async /await make the code more readeable and easier to understand
// makes look like synchronous code

//  async function example
let getUser = new Promise((resolve, reject) =>{
        // setTimeOut is used to stimulate an asynchronous operation
        setTimeout(() =>{
            resolve({name : "John", age:20})
        },2000)
})

async function myFunction() {
    let user = await getUser
    console.log(user);
}

myFunction();

// using async and await for real fake api
let getUserFromAPi = async() =>{
    const response = await(https://jsonplaceholder.typicode.com/todos)
}