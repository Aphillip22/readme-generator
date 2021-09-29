// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const readmeDataArgs = process.argv.slice(2);
const [filename, data] = readmeDataArgs;
// TODO: Create an array of questions for user input
function questions() {
return inquirer.prompt([
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
  ]);
};

// TODO: Create a function to write README file
function generateMarkdown() {
    inquirer.prompt(questions)
  .then((response)=> {
    console.log(response)
  });
};

fs.writeFile('README.md', `${title}`, generatePage(filename, data), err => {
    if (err) throw new Error(err);
});
// TODO: Create a function to initialize app
async function init() {
    console.log("Please enjoy this README Generator!");
    try{
        const answers=await questions();
        const md=generateMarkdown(answers);
        await writeFile("README.md",md);
        console.log("We did it!");
    } catch(err){
        console.log(err);
    }
};

// Function call to initialize app
init();