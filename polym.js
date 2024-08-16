class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} издает звук`);
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

const animals = [new Dog('Шарик'), new Cat('Мурка')];

animals.forEach(animal => {
    animal.speak();  // Шарик гавкает, Мурка мяукает
});