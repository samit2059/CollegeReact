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
car.Horn("BEEP");

class Car extends Vehicle{
    constructor(brand, model, wheels, car.VehicleName, Color, Sound){
        super(car, Color, Sound);
        this.brand = brand;
        this.model = model;
        this.wheels = wheels;
    }
    Start(){
        console.log(this.brand,"is starting");
    }
}


class Bike extends Vehicle{
    constructor(brand, model, wheels, VehicleName, Color, Sound){
        super(VehicleName, Color, Sound);
        this.brand = brand;
        this.model = model;
        this.wheels = wheels;
    }
    Start(){
        console.log(this.brand,"is starting");
    }
}
const car1 = new Car("BMW","x009",4, "Car", "Blue", 200);
console.log(car1);
car1.Start();
car1.Horn("High");

const bike1 = new Bike("Bullet","2009",2, "Bike", "White", 100);
console.log(bike1);
bike1.Start();
bike1.Horn("Low");