console.log("Программа запущена");

class Car {
    constructor(mark, speed, fuel) {
        this.mark = mark;
        let _speed = speed;
        let _fuel = fuel;

        this.accelerate = function(amount) {
            if (amount > 0) {
                _speed += amount;
                console.log("Speed += " + amount);
            }
        };

        this.brake = function(amount) {
            if (speed > 0 && speed >= amount) {
                _speed -= amount;
                console.log("Speed -= " + amount);
            }
        };

        this.checkspeed = function() {
            return _speed;
        }

        this.checkfuel = function() {
            return _fuel;
        };
    }
}

const my_car = new Car("Hundai", 100, 200);
console.log("fuel = " + my_car.checkfuel());
console.log("speed = " + my_car.checkspeed());
my_car.accelerate(50);
console.log("speed = " + my_car.checkspeed());
my_car.brake(30);
console.log("speed = " + my_car.checkspeed());
console.log("car = " + my_car.mark);
console.log("incaps speed = " + my_car.speed);
console.log("incaps fuel = " + my_car.fuel);
