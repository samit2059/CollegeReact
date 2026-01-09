let myArr = [1,2,3,4,5];
let qn1 = myArr.map((Element, index)=>{
    return Math.pow(Element, 2);
})
console.log(qn1);

myArr.push(6);
console.log(myArr);

let qn2 = myArr.filter((Element, index)=>{
    return Element%2==0;
})

console.log(qn2)
let summ = [10,20,30,40];
let qn3 = summ.reduce((accumulator, element) =>{
    return accumulator + element;
},0)
console.log(qn3);

let fruits = ["apple", "banana", "orange"];
let qn4 = fruits.forEach((element, index)=>{
    console.log("index :",index, "Elements : ",element);
})
console.log(qn3)