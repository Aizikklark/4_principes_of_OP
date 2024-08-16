class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} издаёт звук`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} гавкает`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} мяукает`);
    }
}

const cat = new Cat('Юсби');
cat.speak();

const dog = new Dog('Рэй');
dog.speak();

