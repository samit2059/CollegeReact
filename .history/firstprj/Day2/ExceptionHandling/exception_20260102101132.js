
let getUserById = async(id) =>{
    try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    let data = await response.json();
    console.log(data);
    }
    catch(error){
        console.log("Error message: ", error);
    }
    finally{
        console.log("API CALLED");
    }
}

getUserById(4);