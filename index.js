const fs = require('fs');
const generateTeam = require(`./src/generateTeam`)
const path = require(`path`)
const inquire = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const teamMembers = []
const idArr = []
const outputDir = path.resolve(__dirname, `dist`)
const outputPath = path.join(outputDir, `index.html`)
function Menu() {
   
    function createManager() {
        inquire.prompt(
            [
                {
                    type: 'input',
                    name: 'managerName',
                    message: 'What is your name, or name of your manager?'
                },
                {
                    type: 'input',
                    name: 'managerID',
                    message: 'Please input ID #'
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: 'What is your email?'
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is your office number?'
                },
            ]
        ).then((results) => {
            const manager = new Manager(results.managerName, results.managerID, results.managerEmail, results.officeNumber)
            teamMembers.push(manager)
            //best practices for validating IDs
            idArr.push(results.managerID)
            createTeam()
        })
    }
    function createTeam(){
        inquire.prompt({
            type: 'list',
            name: 'role',
            message: 'What is your role in the company?',
            choices: ['Intern', 'Engineer', 'None']
        }).then((results) => {
            switch (results.role) {
                case "Intern":
                    addIntern()
                    break;
                case "Engineer":
                    addEngineer()
                    break;
                default:
                    buildTeam()
            }
        })

    }
    function addEngineer() {
        inquire.prompt(
            [
                {
                    type: 'input',
                    name: 'engineerName',
                    message: 'What is your name?'
                },
                {
                    type: 'input',
                    name: 'engineerID',
                    message: 'Please input ID #'
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: 'What is your email?'
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is your Github?'
                },
            ]
        ).then((results) => {
            const engineer = new Engineer(results.engineerName, results.engineerID, results.engineerEmail, results.engineerNumber)
            teamMembers.push(engineer)
            idArr.push(results.engineerID)
            createTeam()
        })
    }
    function addIntern() {
        inquire.prompt(
            [
                {
                    type: 'input',
                    name: 'internName',
                    message: 'What is your name?'
                },
                {
                    type: 'input',
                    name: 'internID',
                    message: 'Please input ID #'
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: 'What is your email?'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school did you attend?'
                },
            ]
        ).then((results) => {
            const intern = new Intern(results.internName, results.internID, results.internEmail, results.school)
            teamMembers.push(intern)
            //best practices for validating if in there
            idArr.push(results.internID)
            createTeam()
        })

    }
    createManager()
}
console.log(generateTeam)
function buildTeam() {
    fs.writeFileSync(outputPath , generateTeam(teamMembers))
}

Menu()

