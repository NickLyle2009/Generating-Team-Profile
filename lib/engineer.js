const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(Name, id, email, github) {
        super(Name, id, email)
        this.github = github;
    };

    getGithub() {
        return this.github
    };
    getRole() {
        return "Engineer"
    }


}




module.exports = Engineer