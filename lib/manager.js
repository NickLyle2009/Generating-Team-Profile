

class Manager {
    constructor(officeNumber){
    
    this.officeNumber = officeNumber;
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