//Constructor that initializes make and speed (current speed in km/h)
class Car {
    constructor (make,speed) {
        this.make=make;
        this.speed=speed;
    }
//accelerate method
    accelerate () {
        this.speed += 10;
        console.log(`New speed:${this.speed} km/h`);
    }
//brake method
    brake () {
        this.speed -= 5;
        console.log(`New speed:${this.speed} km/h`);
    }
}

//Example
Car1 = new Car('BMW', 120);
Car2 = new Car('Mercedes', 95);

//Test data
Car1.accelerate();
Car1.brake();
Car1.brake();

Car2.accelerate();
Car2.accelerate();
Car2.brake();
