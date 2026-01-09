let myArr = [1,2,3,4,5];
let qn1 = myArr.map((Element, index)=>{
    return Math.pow(Element, 2);
})
console.log(qn1);

myArr.push(6);
console.log(myArr);

let qn2 = myArr.filter((Element, index)=>{
    return Element%2==0
})