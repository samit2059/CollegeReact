//  class : blueprint
//  object : instance
//  class examplee

class Car{
    // initial setup for this class
    constructor(color, wheels, brand, model){
        this.color = color
        this.wheels = wheels
        this.brand = brand
        this.model = model
    }
    
}
// creating object or instance of Car class
const car1 = new Car("red",4,"Tesla","Model 1");
const car2 = new Car("white",4,"BMW","Model 3");
console.log(car1);
console.log(`Car2 Color : ${car2.color}`);