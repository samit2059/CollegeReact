const poster = async(ID) =>{
    try{

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${ID}`);
        const data = await response.json();
        console.log(data);
    }
     catch(error)   {
        
     }
}

poster(2);