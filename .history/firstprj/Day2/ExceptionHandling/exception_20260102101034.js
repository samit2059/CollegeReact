
let getUserById = async(id) =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    let data = await response.json();
    console.log(data);
}

getUserById(4);