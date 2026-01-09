let getUserById = async(id) =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    let data = await response.json();
    console.log(data);
}