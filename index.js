const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");

const collectUserInput = async () => {
  const userInput = await inquirer.prompt([
    {
      type: "list",
      name: "shape",
      message: "Choose a shape for your logo:",
      choices: ["Circle", "Triangle", "Square"],
    },
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
  
  let shape;

  switch (userInput.shape) {
    case "Circle":
        shape = new Circle();
        break;
    case "Triangle":
        shape = new Triangle();
        break;
    case "Square":
        shape = new Square();
        break;
    default:
        console.log("Invalid shape input.");
        return;
    };

  shape.setColor(userInput.color);
  shape.setText(userInput.text);
  shape.setTextColor(userInput.textColor);

  const svgString = shape.render();
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
