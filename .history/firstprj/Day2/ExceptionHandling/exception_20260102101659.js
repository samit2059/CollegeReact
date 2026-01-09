
let getUserById = async(id) =>{
    try{
        console.log("loading data ...");
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    let data = await response.json();
    console.log(Object.keys);
    console.log(data);
    }
    catch(error){
        console.log("Error message: ", error);
    }
    finally{
        console.log("data loaded ..");
        console.log("API CALLED finally");
    }
}

getUserById(4);