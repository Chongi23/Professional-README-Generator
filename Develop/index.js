// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        //Github user name inatake
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username??',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address??'
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?",
    },

    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project:',
     },

     {
        type: 'list',
        name: 'license',
        message: 'What type of license should your project have??',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
     },
     {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies??',
        default: 'npm init',
     },
     {
        type: 'input',
        name: 'useage',
        message: 'What does the user need to know about using the repo??',
     },
     {
        type: 'input',
        name: 'contribution',
        message: 'What should the user know about contribution to the repo??',
     },
     {
        type: 'input',
        name: 'test',
        massage: 'What command is used to run tests??',
        default: 'npm test',
     },
];

// TODO: Create a function to write README file..based off user input
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(). fileName). data, "utf8");
}
//The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
//process.cwd() gives the name of the directory inside which the NodeJS app is being served from. In other words, the working directory of the NodeJS process.


// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({...inquirerResponses}))
});
}

// Function call to initialize app
init();
