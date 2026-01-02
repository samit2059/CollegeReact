// task 9


let getUSer = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    try{
    const data = await response.json()   
    console.log(data);
    }
    catch(error){
        console.log("Error occured  : ",error);
    }
}

getUSer();