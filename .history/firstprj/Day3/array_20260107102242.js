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

myArr.forEach(i => {
    console.log(myArr[i]);
});