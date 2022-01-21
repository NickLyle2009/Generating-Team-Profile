const Employee = require('./employee')

class Engineer extends Employee{
    constructor(Name, id, email, email, role){
    super(Name, id, email, email, github, role,)
    this.github = github;
    };
    
    getGithub(){
        inquirer.prompt(
          {
            type: 'input',
            name: 'github',
            message: 'What is your github address?'
          })
        };


}




module.exports = Engineer()