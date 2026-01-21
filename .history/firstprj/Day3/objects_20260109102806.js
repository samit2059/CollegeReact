// creating objects:
let myObj = {
    marks: 56,
    "fullName":"Nimesh",
    age: 120,
    address:"Bhaktapur",
}

// accessing values with keys:
// 1. use bracket notation:
let fullName = myObj["fullName"];
console.log("FullName : ",fullName);

// 2. using dot notation
let age = myObj.age;
console.log("Age : ",age)

//  adding new key value pair
myObj.gender = "male";
console.log("added value : ", myObj);

// updateing new key value pair
myObj.address = "Patan";
console.log("updated versions is :",myObj);

// deleting key value pair
delete myObj.marks;
console.log("deleted marks is version :",myObj);
// no direct method for looopng or length of these objects data

// there is no such extensio method for objects : (key:value pair)
// converting objects(key: value pair) to objects (arrays)
// converting to keys arrays

let keys = Object.keys(myObj);
console.log("Keys",keys);
// converting to value array
let value = Object.values(myObj);
console.log("Values :",value);

// converting to entires [keys, values]arrays
let entries = Object.entries(myObj);
console.log(entries);

keys.forEach((Element, index) =>{
    console.log(index+1,"elements in index is :", Element);
})

value.forEach((Element, index) =>{
    console.log(index,"elements in index is :", Element);
})

entries.forEach(([keys, value], index) =>{
    console.log(index,"elements in index is :", keys, "value s :", value);
})

// todo :
// 1. demonstartion array extension methods : reverse, slice, splice, sort, concat, shift
// 
//  2. let arrObj = [{name :"hari", age:22},{name :"hari", age:22},{name :"hari", age:22}]
