// Merge and destruct the objects
const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};

const obj3 = {...obj1,...obj2};
console.log("a : ",obj3.a, " c :",obj3.c);