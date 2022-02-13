// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");

const generatorMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"what is the title of the project?",
        name:"Title"
    
    }, {
        type:"input",
        message: "What is project about? Give detailed description explaining the what, why, and how of your project. Use the following questions as a guide: 1. What was your motivation?  2. Why did you build this project? 3.What problem does it solve? 4.What did you learn?",
        name: "Description"
    
    }, {
        type: "input",
        message: "Table of Contents.",
        name:"Table of Contents"
    
    },{
        type: "input",
        message: "what the user need to install to run this app?",
        name:"Installation"
    
    }, {
        type:"input",
        message: "How is the app used?",
        name:"Usage"
    
    }, {
        type:"input",
        message:"What licenses are being used?",
        name:"License"

    }, {
        type:"input",
        message:"Who contributed to this project?",
        name:"Contributing"

    }, {
        type:"input",
        message:"What commands are needed to test this app?",
        name:"Tests"

    },
    {
        type:"input",
        message:"Contact information for inquiries.",
        name:"Questions"
    },{
        type:"input",
        message:"What is your Github username?",
        name:"Username"

    },{
        type:"input",
        message:"What is your email?",
        name:"email"

    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(fileName)
        console.log(data)
        if(err){
            return console.log(err)
        } else{
            console.log("success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generatorMarkdown(data));
    })
}

// Function call to initialize app
init();
