let getUserById = async(id) =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await response;
    
}