const exception = (a,b) =>{
    try{
        const data = a/b;
        console.log(data);
        
    }
    catch(err){
         
    }
    finally{
        console.log("Done ...");
    }
}
exception(1,0);