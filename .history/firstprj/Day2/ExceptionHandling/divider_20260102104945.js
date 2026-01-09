const exception = (a,b) =>{
    try{
        const data = a/b;
        console.log(data);
        
    }
    if(b === 0){
        catch(err){
            throw "B shouldnot be 0";
            // console.log(error);
        }
    }
}
exception(1,2);