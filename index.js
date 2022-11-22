// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Pleae provide a brief description of your projec:?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use:",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a lincese for your application: ",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3.0", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Guidelines for how to contribute to your project: ",
  },
  {
    type: "input",
    name: "tests",
    message: "How to test your application?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) =>
  error ? console.error(err) : console.log(`Wrote to ${fileName} successfully!`)
);

}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    const readMeString = generateMarkdown(answers);
    writeToFile("./output/README.md", readMeString);
  })
}

// Function call to initialize app
init();
