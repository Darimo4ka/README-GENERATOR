// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
https://github.com/${data.Username}/${data.Title}
# Description
${data.Description}
# Table of Contents
*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contributing](#contributing)
*[Tests](#tests)
*[Questions](#questions)
#Installation
The following necessary dependencies must be unstalled to run the application properly: inquire,fs,util
#Usage
In order th use this app, ${data.Usage}
#License
This project is licensed under the ${data.License} license.
#Contributing 
Contributors: ${data.Contributing}
#Tests
The following needed to run the test: ${data.Tests}
#Questions
If you have any questions about the repo, open an issue or contact Darimo4ka directly at: darima_badm@yahoo.com. 
`;
}

module.exports = generateMarkdown;
