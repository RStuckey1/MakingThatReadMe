import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
    },
    {
        type: 'input',
        name: 'features',
        message: 'List the features of the project.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If you would like other developers to contribute, add guidelines for how to do so.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write tests for your application. Then provide examples on how to run them.'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'If you have any questions, reach out to me on github.'
    }
];

function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('README.md created!')
    );

}

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile('README.md', answers);
        })
        .catch((error) => {
            console.error(error);
        });
};

init();