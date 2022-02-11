// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");

const generatorMarkdown = require("./util/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        Message:"what is the title of the project?",
        name:"Title"
    
    }, {
        type:"input",
        Message: "What is project about? Give detailed description explaining the what, why, and how of your project. Use the following questions as a guide: 1. What was your motivation?  2. Why did you build this project? 3.What problem does it solve? 4.What did you learn?",
        name: "Description"
    
    }, {
        type: "input",
        Message: "Table of Contents.",
        name:"Table of Contents"
    
    },{
        type: "input",
        Message: "what the user need to install to run this app?",
        name:"Installation"
    
    }, {
        type:"input",
        Message: "How is the app used?",
        name:"Usage"
    
    }, {
        type:"input",
        Message:"What licenses are being used?",
        name:"License"

    },{
        type:"input",
        Message:"Who contributed to this project?",
        name:"Contributing"

    },{
        type:"input",
        Message:"What commands are needed to test this app?",
        name:"Tests"

    },{
        type:"input",
        Message:"Contact information for inquiries?",
        name:"Question"

    },
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
