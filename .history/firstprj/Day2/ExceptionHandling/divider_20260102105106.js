const exception = (a,b) =>{
    try{
        const data = a/b;
        console.log(data);
           if(b === 0){
            throw "B shouldnot be 0";
            // console.log(err);
        }
    }
    catch(err){
         
    }
    finally{
        console.log("Done ...");
    }
}
exception(1,0);