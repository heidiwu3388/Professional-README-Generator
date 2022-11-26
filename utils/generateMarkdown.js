// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseString = "";
  switch (license) {
    case "MIT" :
      licenseString = "MIT";
      break;
    case "APACHE 2.0" :
      licenseString = "Apache_2.0";
      break;
    case "GPL 3.0" :
      licenseString = "GPLv3";
      break;
    case "BSD 3.0" :
      licenseString = "BSD_3";
      break;
    case "None" :
      return "";
  }
  return `![GitHub license](https://img.shields.io/badge/license-${licenseString}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseString = "";
  switch (license) {
    case "MIT" :
      licenseString = "MIT";
      break;
    case "APACHE 2.0" :
      licenseString = "Apache-2.0";
      break;
    case "GPL 3.0" :
      licenseString = "gpl-3.0";
      break;
    case "BSD 3.0" :
      licenseString = "BSD-3-Clause";
      break;
    default :
      return "";
  }
  return `[${license}](https://opensource.org/licenses/${licenseString})`;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    const licenseLink = renderLicenseLink(license);
    const template = `## License
This project is licensed under the terms of the ${licenseLink} license.
    `;
    return template;
  }
}

// TODO: Create a function that returns the license section of the Table of Content (TOC)
// If there is no license, return an empty string
function renderLicenseTOC(license) {
  if (license === "None") {
    return "";
  } else {
    return `* [License](#license) `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const licenseTOC = renderLicenseTOC(data.license);
  const licenseSection = renderLicenseSection(data.license);

  const template =  `
# ${data.title}
${badge}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${licenseTOC}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

${licenseSection}

## Contributing
${data.contributing}

## Tests
To run tests, run the following command:
\`\`\`
${data.tests}
\`\`\`

## Questions
- If you have any questions about the repo, open an issue or contact me directly at ${data.email}. 
- You can find more of my work at [my GitHub](https://github.com/${data.github}/).
    
  `;

  return template;
}

module.exports = generateMarkdown;
