

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  -[License](#license)
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributing](#contributing)
  -[Test](#test)
  -[Contact](#contact)
  # License
  ![${data.license}](https://img.shields.io/static/v1?label=license&message=${data.license}&color=brightgreen)
  # Description
  ${data.description}
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # Contributing
  ${data.contributing}
  # Test
  ${data.test}
  # Technologies
  ${data.technologies}
  # Contact
  For any questions or to discuss this project further, please reach out at ${data.email} or ${data.username}
`;
}

module.exports = generateMarkdown;
