// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const {writeFile, copyFile} = require('./utils/generateMarkdown');
const readmeDataArgs = process.argv.slice(2);
const [fileName, data] = readmeDataArgs;
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
  ];
const tableOfContents = [
    'Title',
    'Description',
    'Installation',
    'Usage',
    'License',
    'Contributing',
    'Test',
    'Contact',
    'Technologies',
]
tableOfContents.forEach((item, index) => {
    questions[index].name = item
})
// TODO: Create a function to write README file
.then(function(data) {
    const filename =
      data.name
        .toLowerCase()
        .split(' ')
        .join('') + '.json';

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
      if (err) {
        return console.log(err);
      }
    });
  });

fs.writeFile('README.md', `${title}`, generatePage(filename, data), err => {
    if (err) throw new Error(err);
});
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
