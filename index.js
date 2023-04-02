const fs = require("fs");
const inquirer = require("inquirer");
const Circle = require("./lib/shapes");

const collectUserInput = async () => {
  const userInput = await inquirer.prompt([
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
]);

    return userInput;
};

const main = async () => {
  const userInput = await collectUserInput();
  const circle = new Circle();
  circle.setColor(userInput.color);
  circle.setText(userInput.text);
  circle.setTextColor(userInput.textColor);

  const svgString = circle.render();
  const filename = "logo.svg";
  const filePath = `./examples/${filename}`;

  fs.writeFile(filePath, svgString, (err) => {
    if (err) {
      console.log("Error writing file:", err);
    } else {
      console.log(`File saved at ${filePath}`);
    }
  });
};

main();
