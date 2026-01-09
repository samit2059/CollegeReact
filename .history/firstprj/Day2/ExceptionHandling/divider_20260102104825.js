const exception = (a,b) =>{
    try{
        const data = a/b;
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
exception(1,2);