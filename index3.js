class Employee{

    setEmpDetails(name, id, phoneN0){
        this.name = name;
        this.id = id;
        this.phoneN0 = phoneN0;
    }

    getEmpName = () => {
        return this.name;
    }
    
    getEmpId = () => {
        return this.id;
    }

    getPhoneNo = () => {
        return this.phoneN0;
    }
}

let emp1 = new Employee();
emp1.setEmpDetails("Rohit", 2345, "306-123-4562");
console.log(emp1.getEmpName());
console.log(emp1.getEmpId());
console.log(emp1.getPhoneNo());

