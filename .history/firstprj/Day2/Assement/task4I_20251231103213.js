export const formatCurrency = (nrs) =>{
    let usd = Math.round((nrs/138),2);
    console.log(usd);
}

export const generateRandomId = () =>{
    let random = Math.floor(Math.random() * 100 )+ 1;
    console.log(random);
}

export const getTodayDate = ()=>{
    let date = new Date();
    console.log(date.getDate)
}