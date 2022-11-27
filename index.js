// include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// An array of questions for user input
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
    message: "What command should be run to install dependecencies?",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the application?",
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
    message: "What command should be run to the tests?",
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

// A function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) =>
  error ? console.error(err) : console.log(`Wrote to ${fileName} successfully!`)
);

}

// A function to initialize app
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
