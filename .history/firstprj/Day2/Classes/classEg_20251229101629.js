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
    // method of the class
    start(){
        this.position++;
        console.log(this.model, " car started....");
    }
    
}
// creating object or instance of Car class
const car1 = new Car("red",4,"Tesla","Model 1",0);
const car2 = new Car("white",4,"BMW","Model 3",10);
// console.log("Initial position",car1.position);
console.log(`Car1 Model : ${car1.model}`);
console.log(car1);
// car1.start();
// console.log(car1.position);
console.log(`Car2 Model : ${car2.model}`);
console.log(car2);
