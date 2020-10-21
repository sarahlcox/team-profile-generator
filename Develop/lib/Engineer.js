// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee=require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name,id,email);
        this.github=github;
    }
    getRole(){
        console.log("engineer");
        // return "Engineer";
    
    }
    getGithub() {
        console.log(this.github)
        // return this.github;
    }
}
var ob = new Employee("Tom",1, "t@test.com", "username");
var ob2 = new Employee("Henry", 2, "h@test.com","username");


console.log(ob, ob2);
ob.getName();
module.exports=Engineer;