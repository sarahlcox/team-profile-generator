// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee=require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name,id,email);
        this.school=school;
    }
    getRole(){
        // console.log("Intern");
        return "Intern";
    
    }
    getSchool() {
        // console.log(this.school)
        return this.github;
    }
}

module.exports=Intern;