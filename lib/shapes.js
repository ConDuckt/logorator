class Circle {
    constructor() {
        this.color = "";
        this.text = "";
        this.textColor = "";
    };
  
    setColor(color) {
        this.color = color;
    };
  
    setText(text) {
        this.text = text;
    };

    setTextColor(textColor) {
        this.textColor = textColor;
    };

    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    };
};
  
class Triangle {
    constructor() {
        this.color = "";
        this.text = "";
        this.textColor = "";
    };
  
    setColor(color) {
        this.color = color;
    };
  
    setText(text) {
        this.text = text;
    };
  
    setTextColor(textColor) {
      this.textColor = textColor;
    };
  
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 280,180 20,180" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    };
};

class Square {
    constructor() {
        this.color = "";
        this.text = "";
        this.textColor = "";
    }
    
    setColor(color) {
        this.color = color;
    };
    
    setText(text) {
        this.text = text;
    };
    
    setTextColor(textColor) {
        this.textColor = textColor;
    };
    
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="260" height="160" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    };
};



  module.exports = { Circle, Triangle, Square };