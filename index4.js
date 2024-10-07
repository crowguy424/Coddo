class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getName = () => {
        return this.name;
    };
    getAge = () => {
        return this.age;
    };
}

class Programmer extends Person{
    constructor(name, age, company, salary, language){
        super(name, age);
        this.company = company;
        this.salary = salary;
        this.language = language;
    }

    sayHi = () => {
        console.log(`Hello, coding is in my blood, veins and dna! My name is ${this.getName()} and I work for ${this.company}`);
    }


}

let programmer = new Programmer("Abdul Muqtadir", 29, "Adapt", 60000, "React");
//console.log(programmer);
programmer.sayHi();
console.log(programmer);
console.log(69 + "69");
