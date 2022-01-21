

class Employee {
  constructor(Name, id, email) {
    this.Name = Name
    this.id = id
    this.email = email

  }
  getName() {
    return this.Name
  };

  getId() {
    return this.id
  };

  getEmail() {
    return this.email
  }
  getRole() {
    return "Employee"
  };
};


module.exports = Employee;