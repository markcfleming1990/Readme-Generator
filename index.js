//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const promptTitle = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "promptTitle",
      message: "What is the project title?(Reqired)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a Project Title!');
          return false;
        }
      }
    },
  ]);
};

const promptProject = portfolioData => {
  console.log(`
    =================
    Add a New ReadMe
    =================
    `);
  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }

  return inquirer
    .prompt([
      {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: ",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a description!');
            return false;
          }
        }
      },
      {
        type: "input",
        name: "installation",
        message: "Describe the installation process if any: ",
      },
      {
        type: "input",
        name: "usage",
        message: "What is this project usage for?"
      },
      {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
          "MIT",
          "APACHE 2.0",
          "GPL 3.0",
          "BSD 3.0",
          "NONE",
        ],
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please select a license!');
            return false;
          }
        }
      },
      {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this projects?"
      },
      {
        type: "input",
        name: "tests",
        message: "Is there a test included?"
      },
      {
        type: "input",
        name: "questions",
        message: "What do I do if I have an issue? "
      },
      {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: ",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email: ",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your email!');
            return false;
          }
        }
      }
    ]);
}


promptTitle()
  .then(promptProject)
  .then(portfolioData => {
    const readMe = generateMarkdown(portfolioData);

    fs.writeFile('./Readme.md', readMe, err => {
      if (err) throw new Error(err);

      console.log('Page created! Check out Readme file in this directory to see it!');
    });
  });


