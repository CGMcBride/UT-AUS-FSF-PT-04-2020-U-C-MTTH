var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "superheroName",
    },
  ])
  .then(function (response) {
    console.log(response);
    if (response.confirm === response.password) {
      console.log("Success!");
    } else {
      console.log("You forgot your password already?!");
    }
  });
