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
const car =  new Vehicle("car", "blue")