// Task 5 — Class representing a Product
// Create a class Product with:
// name
// price
// getInfo()
// Create an object and print info.
// Goal: basic classes in real product

class Product{
    constructor(name , price){
        this.name = name;
        this.price = price;
    }
    getInfo(){
        console.log("Product Name",this.name ,"", this.price)
    }
}