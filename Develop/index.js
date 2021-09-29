// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What would you like your project description to be?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the inteded usage of your project?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which licenses would you like to include?',
        choices: ['MIT', 'Apache', 'BSD'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can someone contribute to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can someone test this project?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
      type: 'checkbox',
      message: 'What languages are included in this project?',
      name: 'technologies',
      choices: ['HTML', 'CSS', 'JavaScript', 'SQL']
    }
  ]

// TODO: Create a function to write README file

function writeInFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        } console.log("Success! You've created your README file!")
    }
    )};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
  .then(function (responses) {
    console.log(responses)
    writeInFile("README.md", generateMarkdown(responses));
  });
};

// Function call to initialize app
init();