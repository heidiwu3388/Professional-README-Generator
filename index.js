// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a lincese for your application: ",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3.0", "None"],
  },
  // {
  //   type: "input",
  //   name: "description",
  //   message: "Please input the description of the project ",
  // },
  // {
  //   type: "input",
  //   name: "email",
  //   message: "Please input the email of the GitHub?",
  // },
  
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
