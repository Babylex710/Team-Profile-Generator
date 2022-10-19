const fs = require('fs');
//inquirer library
const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

//generates html template
const generateHTML = require('./src/generateHTML');

//array of manager and interns
const managers = [];
const engineers = [];
const interns = [];

function createManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the managers name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the managers id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the managers email?'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the managers office number?'
            },
        ]).then(function(answers){
            console.log(answers);
            const { id, email, name, officeNumber } = answers;
            managers.push(new Manager(id, email, name, officeNumber));

            console.log(managers);

            createTeam();
        })

}

function createEngineer() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer email?'
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is the engineer GitHub username?'
        },
    ]).then(function(answers){
        console.log(answers);
        const { id, email, name, gitHub } = answers;
        engineers.push(new Engineer(id, email, name, gitHub));
        console.log(engineers);
        createTeam();
    });
}

function createIntern() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern school name?'
        },
    ]).then(function(answers){
        console.log(answers);
        const { id, email, name, school } = answers;
        interns.push(new Intern(id, email, name, school));
        console.log(interns);
        createTeam();
    });
}

function createTeam() {
    inquirer
    .prompt([
        {
          type: 'list',
          name: 'menuOption',
          message: 'Which type of employee would you like to add?',
          choices: ['Intern', 'Engineer', 'None']
        },
    ]).then(function(answers){
        console.log(answers);

        switch(answers.menuOption) {
            case 'Intern':
                createIntern();
                break;
                case 'Engineer':
                createEngineer();
                break;
                default:
                    fs.writeFileSync('./dist/team.html', generateHTML({ managers, engineers, interns}));
  
                    return;
        }
    })
}

createManager();