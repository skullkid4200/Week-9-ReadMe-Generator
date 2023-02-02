const inquirer = require('inquirer');
const fs = require('fs/promises');
const handleResponse = (response) => {
  console.log(response);
}


inquirer
  .prompt([
    {
      type: 'input',
      message: 'Project Title:',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'Description:',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'Installation:',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'Usage:',
      name: 'Usage',
    },
    {
      type: 'input',
      message: 'Contributors:',
      name: 'Contributors',
    },
    {
      type: 'input',
      message: 'Tests:',
      name: 'Tests',
    },
    {
      type: 'input',
      message: 'GitHub Username:',
      name: 'Username',
    },
    {
      type: 'input',
      message: 'Email Address:',
      name: 'Email',
    },
    {
      type: 'list',
      choices: ["MIT License", new inquirer.Separator(), "Apache License", new inquirer.Separator(), "BSD License"],
      message: 'License:',
      name: 'License',
    }

  ])
  .then(handleResponse)

  // .then((handleResponse) =>
  //   fs.writeFile("readME.md", "poop"),
  // );


