const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a description of your project",
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide the installation instructions.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage information.",
    },
    {
        type: "input",
        name: "contribution",
        message: "Please state what your contribution guidelines are.",
    },
    {
        type: "input",
        name: "testInstructions",
        message: "Please provide any test instructions that may be required.",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub profile name?",
    },
    {
        type: "list",
        name: "license",
        choices: ["MIT", "Apache 2.0", "GNU General Public License V3"],
        message: "How is your project licensed?",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email to let others know how to contact you.",
  },

  ])
  .then((answers) => {
    if(answers.license == "MIT"){
        license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    else if (answers.license == "Apache 2.0"){
        license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    else if (answers.license == "GNU General Public License V3"){
        license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
    markdownFile = generateMarkdown(answers,license)
    fs.writeFile('GeneratedREADME.md', markdownFile, (err) => err? console.error(error):console.log("Success"))
  });