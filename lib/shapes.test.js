const Circle = require("./shapes");

test("renders a blue circle with the text 'TES' in blue", () => {
    const shape = new Circle();
    shape.setColor("blue");
    shape.setText("TES");
    shape.setTextColor("blue");
  
    expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">TES</text></svg>');
});