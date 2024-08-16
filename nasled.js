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

const dog = new Dog('Шарик');
dog.speak();  // Шарик гавкает
