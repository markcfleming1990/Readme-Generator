// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {  }

  // generateReadme function populating the README.md
  function generateMarkdown(answers) {
    return `
    <h1 align=center>${answers.promptTitle}👋</h1> 
<p align="center">
    <img src="https://img.shields.io/github/repo-size/markcfleming1990/README-generator" />
    <img src="https://img.shields.io/github/languages/top/markcfleming1990/README-generator"  />
    <img src="https://img.shields.io/github/issues/markcfleming1990/README-generator" />
    <img src="https://img.shields.io/github/last-commit/markcfleming1990/README-generator" >
    <a href="https://twitter.com/goat904">
        <img alt="Twitter: goat904" src="https://img.shields.io/twitter/follow/goat904.svg?style=social" target="_blank" />
    </a>
</p>


![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
## Description
🔍 ${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
💾 ${answers.installation}
## Usage
💻 ${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 
## Contributing
👪 ${answers.contributing}
## Tests
✏️ ${answers.tests}
## Questions
✋ ${answers.questions}<br />
<br />
:octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
✉️ Email me with any questions: ${answers.email}<br /><br />

_This README was generated with ❤️ by [README-generator](https://github.com/markcfleming1990/README-generator) 🔥🔥🔥_
`;
  };

  module.exports = generateMarkdown;
