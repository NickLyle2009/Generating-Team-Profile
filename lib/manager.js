const Employee = require('./employee')

class Manager extends Employee{
    constructor(Name, id, email, email, role){
    super(Name, id, email, email, github, role,)
    this.github = github;
    };

    getGithub(){
        inquirer.prompt(
          {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?'
          })
        };


}




module.exports = Manager;