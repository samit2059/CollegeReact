const poster = async(ID) =>{
    try{
        console.log("loading ...")
        const response = await de(`https://jsonplaceholder.typicode.com/posts/${ID}`);
        const data = await response.json();
        console.log(data);
    }
     catch(error){
        console.log(error);
     }
     finally{
        console.log("posted successfully");
     }
}

poster(2);