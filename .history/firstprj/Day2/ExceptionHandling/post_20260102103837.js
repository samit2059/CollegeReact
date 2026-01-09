const poster = async(ID) =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${ID}`);
    const data = await response.json();
    console.log(data);

}

poster(2);