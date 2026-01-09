const exception = (a,b) =>{
    try{
        const data = a/b;
        console.log(data);
        
    }
    catch(err){
            if(b === 0){
            throw "B shouldnot be 0";
            console.log(err);
        }
    }
}
exception(1,2);