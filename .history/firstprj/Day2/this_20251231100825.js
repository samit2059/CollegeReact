//this keyword in key: value pair @object
let laptop = {
    LaptopName: "Acer Alite 4.0",
    price: 520000,
    specification: " 8 core i3, 8gb ram, 12 GB SSD",
    color: "navy blue, black",
    diaplayPrice: function(){
        console.log("dispaly price calle")
        console.log("price of laptop is: ",this.price)
    },
    //arrow function never preserve the this keyword
    displaySpecification: function(){
        console.log("specification: ", this.specification)
    },
    displayColor: function(){
        console.log("color: ", this.color)
    }
}
console.log(laptop)
//calling disiplay price function
laptop.diaplayPrice()
laptop.displaySpecification()
//here this is lost
// let tempFunc= laptop.displayColor
// tempFunc()
// preserving this keyword with bind feature
//  seperate assigning of task can be used with this keyword with help of .bind()
let tempfunc1 = laptop.displayColor.bind(laptop)
tempfunc1()