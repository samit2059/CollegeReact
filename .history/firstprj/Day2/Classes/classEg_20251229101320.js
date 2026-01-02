//  class : blueprint
//  object : instance
//  class examplee

class Car{
    // initial setup for this class
    constructor(color, wheels, brand, model, position){
        this.color = color
        this.wheels = wheels
        this.brand = brand
        this.model = model
        this.position = position
    }
    run(){
        this.position++;
    }
    
}
// creating object or instance of Car class
const car1 = new Car("red",4,"Tesla","Model 1",0);
const car2 = new Car("white",4,"BMW","Model 3",10);
car1.run();
console.log(car1.)
console.log(`Car1 Color : ${car1.color}`);
console.log(car1);
console.log(`Car2 Color : ${car2.color}`);
console.log(car2);
