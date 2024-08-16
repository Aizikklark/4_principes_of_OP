class Shape {
    constructor(name) {
        if (this.constructor === Shape) {
            throw new Error("Невозможно создать объект абстрактного класса");
        }
        this.name = name;
    }

    area() {
        throw new Error("Метод 'area' должен быть реализован");
    }

    perimeter() {
        throw new Error("Метод 'perimeter' должен быть реализован");
    }
}

class Square extends Shape {
    constructor(side) {
        super('Square');
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }

    perimeter() {
        return 4 * this.side;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

const square = new Square(4);
console.log(`${square.name} area:`, square.area());  // Square area: 16
console.log(`${square.name} perimeter:`, square.perimeter());  // Square perimeter: 16

const circle = new Circle(3);
console.log(`${circle.name} area:`, circle.area());  // Circle area: 28.274333882308138
console.log(`${circle.name} perimeter:`, circle.perimeter());  // Circle perimeter: 18.84955592153876