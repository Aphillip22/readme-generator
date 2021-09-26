// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const {writeFile, copyFile} = require('./utils/generateMarkdown');
const readmeDataArgs = process.argv.slice(2);
const [fileName, data] = readmeDataArgs;
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What would you like your project description to be?'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What is the inteded usage of your project?'
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'How can someone contribute to this project?'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'How can someone test this project?'
    },
    {
        type: 'input',
        name: 'Github Name',
        message: 'What is your Github username?'
    },
    {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'Slack', 'smoke signal']
    },
    {
      type: 'checkbox',
      message: 'What languages are included in this project?',
      name: 'Technologies',
      choices: ['HTML', 'CSS', 'JavaScript', 'SQL']
    }
  ])


// TODO: Create a function to write README file
fs.writeFile('../readme-guide.md', generatePage(fileName, data), err => {
    if (err) throw new Error(err);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
