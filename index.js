// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markDown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What would you like your title to be?",
    name: "title",
  },
  {
    type: "input",
    message: "Add a description for your website!",
    name: "description",
  },
  {
    type: "input",
    message: "explain how to intall your project",
    name: "installation",
  },
  {
    type: "input",
    message: "Explain the usage of your website.",
    name: "usage",
  },
  {
    type: "input",
    message: "Add any contributors.",
    name: "contributing",
  },
  {
    type: "input",
    message: "Add test instructions.",
    name: "tests",
  },
  {
    type: "input",
    message: "Add your github to answer questions for your project.",
    name: "github",
  },
  {
    type: "list",
    message: "Choose the license for your project.",
    name: "license",
    choices: ["MIT", "Apache", "GNU GPL v3"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) =>
    error ? console.log(error) : console.log("Complete")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile(`./generated_${data.title}_README.md`, markDown(data));
  });
}

// Function call to initialize app
init();
