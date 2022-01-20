const Employee = require('./employee')
class Intern extends Employee{
    constructor(Name, id, email, email, role){
    super(Name, id, email, email, role, school)
    this.school = school;
    };

    getSchool(){
        inquirer.prompt(
          {
            type: 'input',
            name: 'school',
            message: 'What school did you attend?'
          })
        };
}





module.exports = Intern;