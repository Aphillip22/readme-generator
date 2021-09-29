// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const license = {
  "MIT" :"https://img.shields.io/static/v1?label=license&message=MIT&color=brightgreen",
  "Apache" : "https://img.shields.io/static/v1?label=license&message=apache&color=blueviolet",
  "BSD" : "https://img.shields.io/static/v1?label=license&message=BSD&color=blue",
  "" : "",
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contributing](#contributing)
  -[Test](#test)
  -[Contact](#email)(#username)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}(#license)
  ## Contributing
  ${data.contributing}
  ## Test
  ${data.test}
  ## Technologies
  ${data.technologies}
  ## Contact
  For any questions or to discuss this project further, please reach out at ${data.email} or ${data.username}
`;
}

module.exports = generateMarkdown;
