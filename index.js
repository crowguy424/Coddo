class Person{

    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    getName = () => {
        return this.name;
    };

    getAge = () => {
        return this.age;
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
let Shoeb = new Person("Shoeb", "23");
let Kawshik = new Person("Kawshik", "22");
let house = new House("edfrgd", "7000", [Shoeb, Kawshik]);
//console.log(house);
console.log(house.getResidents());
let Jay = new Person("Jay", 22)
house.addResidents(Jay);
console.log(house.getResidents());

