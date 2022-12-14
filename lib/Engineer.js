const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, email, name, gitHub) {
        super(id, email, name);
        this.gitHub = gitHub;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getName() {
        return this.name;
    }

    getGithub() {
        return this.gitHub;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;