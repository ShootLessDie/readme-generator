// function to generate markdown for README
function generateMarkdown(data, license) {
  return `# ${data.projectTitle}
  ${license}

## Description
${data.description}
<br>

### Table of Contentss
####[Installation](#installation)
####[Usage](#usage)
####[License](#license)
####[Contributing](#contributing)
####[Tests](#tests)
####[Questions](#questions)
####[Liecense](#license)

<br>


### Installation {#installation}
${data.installation}

<br>

### Usage {#usage}
${data.usage}

<br>

### License {#license}
This project is licensed under the ${data.license} license.

<br>

### Contributing {#contributing}
${data.contribution}

<br>

### Tests {#tests}
${data.tests}

<br>

### Questions {#questions}
Where can I find more of your work? -> [Check out my Github profile](https://github.com/${data.github})
How can I contact you? -> <${data.email}>
`;
}

module.exports = generateMarkdown;
