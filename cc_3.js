//Constructor that initializes make and speed (current speed in km/h)
class Car {
    constructor (make,speed) {
        this.make=make;
        this.speed=speed;
    accelerator () {
        this.speed += 10;
        console.log(`New speed:${this.speed} km/h`);
    }
}

//Example
exampleCar = new Car('Toyota', 120);

console.log(exampleCar.make);
console.log(exampleCar.speed);
