
const inquirer = require('inquirer');

inquirer

class Employee {
    constructor(Name, id, email, email, role){
        this.Name = Name
        this.id = id
        this.email = email
        this.role = role
    }

    getName(){
    inquirer.prompt(
      {
        type: 'input',
        name: 'Name',
        message: 'What is your name?'
      })
    };

    getId(){
        inquirer.prompt(
      {
        type: 'input',
        name: 'ID',
        message: 'Please input ID #'
      })
    };

    getEmail(){
        inquirer.prompt(
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
      })
    }
      getRole(){
        inquirer.prompt(
      {
        type: 'list',
        name: 'role',
        message: 'What is your role in the company?',
        choices: ['Employee', 'Manager', 'Intern', 'Engineer']
      })
    }
  };

  module.exports = Employee;