// Task 6 — Inheritance example
// Create Product, then extend a new class FoodProduct that has an expiry date
// Goal: model real objects with OO

class Product {
    constructor(name , price) {
        this.name = name;
        this.price = price;
    }

}
class FoodProducts extends Product{
    constructor(name, price, expiryDate){
        super(name , price);
        this.expiryDate = expiryDate;
    }
    getInfo(){
        console.log("name :", this.name, "Price : ", this.price, "ExpiryDate: ", this.expiryDate);
    }
}
const chocolate = new FoodProducts("DairyMilk", 200, 202)