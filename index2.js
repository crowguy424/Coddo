class Person{

    constructor (name, age){
        this.name = name;
        this.age = age;
        this.job = "";
    }

    getName = () => {
        return this.name;
    };

    getAge = () => {
        return this.age;
    };

    setJob = (job) => {
        this.job = job;
    }
}

class House {
    constructor(address, price, residents){
        this.address = address;
        this.price = price;
        this.residents = residents;
    }

    getAddress = () => {
        return this.address;
    };

    getPrice = () => {
        return this.price;
    };

    getResidents = () => {
        return this.residents;
    };

    addResidents = (resident) => {
        this.residents.push(resident);
    
    };

   
}
let Bootang = new Person("Bootang", 19);
let house = new House("725 Robinson St", 20000,[] );
house.addResidents(Bootang);
Bootang.setJob("Homemaker");
console.log(house.getResidents());