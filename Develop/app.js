const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamArr=[];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name"
              },
              {
                type: "input",
                message: "What is your id?",
                name: "id"
              },
              {
                type: "input",
                message: "What is your email?",
                name: "email"
              },
              {
                type: "list",
                name: "role",
                message: "Select role:",
                choices: ["manager","engineer","intern"]
              },
        ])
        .then(function(response) {
            if(response.role === "manager"){
                inquirer.prompt([
                    {
                        type: "input",
                        name: "officeNumber",
                        message: "what is your office number?",
                    }
                ])
                .then(function(managerresult) {
                    console.log(managerresult);
                    console.log(response);
                });
            }
            else if (response.role==="engineer"){
                inquirer.prompt([
                    {
                        type: "input",
                        name: "github",
                        message: "what is your github username?",
                    }
                ])
                .then(function(engineerresult) {
                    console.log(engineerresult);
                });
            }
            else if (response.role==="intern"){
                inquirer.prompt([
                    {
                        type: "input",
                        name: "school",
                        message: "what is your school?",
                    }
                ])
                .then(function(internresult) {
                    console.log(internresult);
                });
            }
            // console.log(response);
            // writeToFile("readme.md", markdown(response));
             
          });
}
init();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
