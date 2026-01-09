const exception = (a,b) =>{
    try{
        const data = a/b;
        console.log(data);
        if(b == 0){
            throw "B shuld "
        }
    }
    catch(error){
        console.log(error);
    }
}
exception(1,2);