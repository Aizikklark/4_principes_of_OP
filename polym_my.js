class Shape {
    constructor() {
        //this.name = name;
    
        this.area = function() {
            console.log(`Error: Area doesn``t definded`);
            //throw new Error("Метод должен быть реализован");
            //return this.area;
        }
        this.perimeter = function() {
            console.log(`Error: Perimeter doesn''t definded `);
            //return this.perimeter;
        }
    }
}

class Rectangle extends Shape {
    constructor(length,width) {
        super();
        this.length = length;
        this.width = width;

        this.area = function() {
            return this.length * this.width;
        }

        this.perimeter = function() {
            return 2 * (length + width);
        }
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;

        this.area = function(){
            return 3.14 * radius * radius;
        }

        this.perimeter = function() {
            return 2 * 3.14 * radius;
        }
    }
}

const shapes = [new Rectangle(2,5), new Circle(5)];
shapes.forEach(shape => {
    console.log(`Площадь = ${shape.area()}, Периметр = ${shape.perimeter()}`);
});

