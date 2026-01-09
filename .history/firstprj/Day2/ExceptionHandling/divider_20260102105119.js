const exception = (a,b) =>{
    try{
        const data = a/b;
        if(b === 0){
            throw new Error ("B shouldnot be 0");
            // console.log(err);
        }
        console.log(data);
    }
    catch(err){
         
    }
    finally{
        console.log("Done ...");
    }
}
exception(1,0);