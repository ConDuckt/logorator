const { Circle, Triangle, Square } = require("./shapes");


test("renders a blue circle with the text 'TES' in blue", () => {
    const shape = new Circle();
    shape.setColor("blue");
    shape.setText("TES");
    shape.setTextColor("blue");
  
    expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">TES</text></svg>');
});

test("renders a red triangle with the text 'TES' in green", () => {
    const shape = new Triangle();
    shape.setColor("red");
    shape.setText("TES");
    shape.setTextColor("green");
  
    expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 280,180 20,180" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">TES</text></svg>');
});

test("renders a yellow square with the text 'TES' in purple", () => {
    const shape = new Square();
    shape.setColor("yellow");
    shape.setText("TES");
    shape.setTextColor("purple");
  
    expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="260" height="160" fill="yellow" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">TES</text></svg>');
});