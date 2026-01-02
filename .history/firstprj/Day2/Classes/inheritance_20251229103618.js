class Vehicle{
    constructor(VehicleName, Color, Sound){
        this.VehicleName = VehicleName
        this.Color = Color
        this.Sound = Sound
    }
    Horn(noise){
        console.log(this.VehicleName,"beep...", noise);
    }
}
const car =  new Vehicle("car", "blue", 20);
console.log(car);
car.Horn();

class Car extends Vehicle{
    constructor(brand, model, wheels){
        super("Car","Red",200);
        this.brand = brand;
        this.model = model;
        this.wheels = wheels;
    }
    Start(){
        console.log(this.brand,"is starting");
    }
}


class Bike extends Vehicle{
    constructor(brand, model, wheels){
        super("Bike","Black",100);
        this.brand = brand;
        this.model = model;
        this.wheels = wheels;
    }
    Start(){
        console.log(this.brand,"is starting");
    }
}
const car1 = new Car("BMW","x009",4);
console.log(car1);
car1.Start();
car1.Horn("High");

const car2 = new Bike("Bullet","2009",2);
console.log(car2);
car2.Start();
car2.Horn("Low");