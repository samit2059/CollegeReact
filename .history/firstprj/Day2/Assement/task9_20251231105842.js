// task 9


let getUSer = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json()   
    console.log(data);
}

getUSer();