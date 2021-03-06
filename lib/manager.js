const Employee = require('./Employee')

class Manager extends Employee {
    constructor(Name, id, email, officeNumber) {
        super(Name, id, email)
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber
    };
    getRole() {
        return "Manager"
    }

}




module.exports = Manager;