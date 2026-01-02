class Vehicle{
    constructor(VehicleName, Color, Sound){
        this.VehicleName = VehicleName
        this.Color = Color
        this.Sound = Sound
    }
    Horn(){
        console.log("beep...");
    }
}
const car =  new Vehicle("car", "blue", 20);
console.log(car);
car.Horn();

class Car extends Vehicle{
    constructor(brand, model, wheels){
        super("Car","Red");
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
car1.Horn();