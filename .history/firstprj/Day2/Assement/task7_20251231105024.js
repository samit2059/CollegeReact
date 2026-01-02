// Task 7 — Promise for fetching settings
// Create a function that returns a Promise that resolves after 2 seconds with app settings (theme, language).
// Use .then() to print them.
// Goal: simulate async setting

let MyPromise = new Promise((resolve, reject) =>{
    try{
    setTimeout(() =>{
        resolve({theme: 'dark', language: 'english'})
    },2000)
}
catch(err){
    reject("error",err);
}
})

async function myFunc(){
    let data = await MyPromise;
    console.log(data)
}

