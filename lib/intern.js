const Employee = require('./Employee')

class Intern extends Employee {
    constructor(Name, id, email, school) {
        super(Name, id, email)
        this.school = school;
    };

    getSchool() {
        return this.school
    };
    getRole() {
        return "Intern"
    }
};






module.exports = Intern;