
let getUserById = async(id) =>{
    try{
        console.log()
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    let data = await response.json();
    console.log(data);
    }
    catch(error){
        console.log("Error message: ", error);
    }
    finally{
        console.log("API CALLED finally");
    }
}

getUserById(4);