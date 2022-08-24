// TODO: Include packages needed for this application

// Package for writing files
const fs = require('fs');

// Package used to ask the user for data
const inquirer = require('inquirer');

// Generate the html
const generateMD = require('./utils/generateMarkdown');

// TODO: Create a function to initialize app
function init() {
    inquirer
    // TODO: Create an array of questions for user input
        .prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'username',
            },
            {
                type: 'input',
                message: 'What is the link to your GitHub profile?',
                name: 'link',
            },
            {
                type: 'input',
                message: 'What is the name of your project?',
                name: 'project',
            },
            {
                type: 'input',
                message: 'Please write a short description of your project',
                name: 'description',
            },
            {
                type: 'input',
                message: 'Please write a short description explaining the usage of your project',
                name: 'usage',
            },
            {
                type: 'list',
                message: 'What kind of license should your project have?',
                choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
                name: 'license',
            },
            {
                type: 'input',
                message: 'What command should be run to install dependencies?',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'What command should be run to run tests?',
                name: 'tests',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
            },
        ])
        // THEN I want to pass 'responses' to 'generateMarkdown' so we can get the 'markdown'
        .then((responses) => {
            const markdown = generateMD(responses);
            // TODO: Create a function to write README file
            fs.writeFile('OUTPUT_README.md', markdown, err =>
                err ? console.error(err) : console.log('Success!')
            );
        });
}

init();
