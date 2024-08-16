class Employee {
    constructor(name){
        this.name = name;
    
        this.calculateSalary = function() {
            throw new Error("Метод должен быть реализован");
        }

        this.getDetails = function() {
            throw new Error("Метод должен быть реализован");
        }
    }
}

class FullTimeEmployee extends Employee {
    constructor(name,annualSalary) {
        super(name);
        this.annualSalary = annualSalary;

        this.calculateSalary = function() {
            return this.annualSalary / 12;
        }

        this.getDetails = function() {
            return `Full-time Employee: ${this.name}, Monthly Salary: ${this.calculateSalary()}`;
        }
    }
}

class PartTimeEmployee extends Employee {
    constructor(name, hourlyRate, hoursWorked) {
        super(name);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;

        this.calculateSalary = function() {
            return this.hourlyRate * this.hoursWorked;
        }

        this.getDetails = function() {
            return `Part-Time Employee: ${name}, Montly Salary: ${this.calculateSalary()}`;
        }
    }
}

const employees = [
    new FullTimeEmployee('Арсений',3000000),
    new PartTimeEmployee(`Женёк`,750,90)
];

employees.forEach(employee => {
    console.log(`name: ${employee.name}, ${employee.getDetails()}`);
});

