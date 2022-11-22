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
  return `[License link](https://opensource.org/licenses/${licenseString})`;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    const badge = renderLicenseBadge(license);
    const link = renderLicenseLink(license);
    const template = `## License
${badge}    
This project is licensed under the terms of the ${license} license.
${link}
    `
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
  const licenseSection = renderLicenseSection(data.license);
  const licenseTOC = renderLicenseTOC(data.license);

  const template =  `
# ${data.title}
${badge}

## Description

${data.description}

## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
${licenseTOC}



## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    
    ![alt text](assets/images/screenshot.png)
    

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

${licenseSection}

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Questions

If you have any questions, contact me by ${data.email}
    
  `;

  return template;
}

module.exports = generateMarkdown;
