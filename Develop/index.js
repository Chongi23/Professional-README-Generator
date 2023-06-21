// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    
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
            choices: ['MIT', 'APACHE 2.0', 'BSD 3', 'None'],
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
            default: 'N/A',
         },
        {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username??',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address??'
    },
   
];

// TODO: Create a function to write README file..based off user input
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((responses) => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({...responses}))
});
}

// Function call to initialize app
init();
