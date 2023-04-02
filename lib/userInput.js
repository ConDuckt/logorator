const inquirer = require("inquirer");

async function collectUserInput() {
  const questions = [
    {
      type: "input",
      name: "color",
      message: "Enter a color for your logo's background shape:",
    },
    {
      type: "input",
      name: "text",
      message: "Enter three letters for your logo's acronym:",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a color for your logo's text:",
    }
  ];

  const answers = await inquirer.prompt(questions);
  return answers;
}

module.exports = collectUserInput;