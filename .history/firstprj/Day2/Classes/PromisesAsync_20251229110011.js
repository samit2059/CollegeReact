// Promise : used to handle asynchrous operations
// syntax  : new Promise((resolve, reject) =>{})
// resolve : when the operation is successful
// reject : when the operation is failed
// resolve and reject are the functions

// creating promises
let MyPromise = new Promise((resolve, reject) => {
    let iHaveDoneMyWork = nul;
    if (iHaveDoneMyWork) {
        resolve("I have done my Work");
    }
    else {
        reject("I have not done my work");
    }
})

// consuming promise
MyPromise.then(
    (result) => {
        console.log(result);
    }
).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Inside Finally");
});