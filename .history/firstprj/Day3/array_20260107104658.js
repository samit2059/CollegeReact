// array : collection of elements
let myArr = [23,3,4,1,11,82,12];
let length1 = myArr.length;
console.log(length1)
console.log(typeof(myArr));

let arrIndex2 = myArr[2];
console.log("Second value is ",arrIndex2);
console.log("third value is ",myArr[3]);

for(let i=0;i<length1;i++){
    console.log(myArr[i]);
}
// forEach loop 
myArr.forEach((element, index) => {
    // callback functions
    console.log("index : ",index, "elemment : ",element);
});
// // using fo r of loop : gives values of array
// for(let element of myArr){
//     console.log(element)
// }
// // using for in loop : gives index of value given
// for(let element in myArr){
//     console.log(element);
// }

let mapArr = myArr.map((element,) =>{
    console.log("new data: ", element)
    return element * 10;
})

console.log(mapArr)
// /where accumulator is main storage in this and elements indicate each values in array Elements as well
let summation = myArr.reduce((accumulator, element) =>{
    return accumulator + element;
},0)

console.log("Total :",summation);

let result = myArr.filter((element, index) =>{
    
})