

class Shapes {
    constructor(monogram, textColor, shapeSelection, shapeColor) {
        this.monogram = monogram;
        this.textColor = textColor;
        this.shapeSelection = shapeSelection;
        this.shapeColor = shapeColor;
    }

    createShape(answers) {
        if (answers.shapeSelection === "Circle") {
            let shapeSelection = new Circle (
                this.monogram, 
                this.textColor, 
                this.shapeColor
                );

            return `
            <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            ${shapeSelection.render()}
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.monogram}</text>
            </svg>
            `
        } else if (answers.shapeSelection === "Triangle") {
            let shapeSelection = new Triangle (
                this.monogram, 
                this.textColor, 
                this.shapeColor
                );

            return `
            <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            ${shapeSelection.render()}
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.monogram}</text>
            </svg>
            `
        } else if (answers.shapeSelection === "Square") {
            let shapeSelection = new Square (
                this.monogram, 
                this.textColor, 
                this.shapeColor
                );

            return `
            <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            ${shapeSelection.render()}
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.monogram}</text>
            </svg>
            `
        } else {
            throw Error("Please choose a shape from the list.")
        }
    }
}

class Circle extends Shapes {
    constructor(monogram, textColor, shapeColor) {
        super(monogram, textColor, "Circle", shapeColor);
    };

    setColor(color) {
        this.shapeColor = color;
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shapes {
    constructor(monogram, textColor, shapeColor) {
        super(monogram, textColor, "Triangle", shapeColor);
    }

    setColor(color) {
        this.shapeColor = color;
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182"  fill="${this.shapeColor}" />`;
    }
}

class Square extends Shapes {
    constructor(monogram, textColor, shapeColor) {
        super(monogram, textColor, "Square", shapeColor);
    };

    setColor(color) {
        this.shapeColor = color;
    }

    render() {
        return `<rect x="40" y="40" width="220" height="120" fill="${this.shapeColor}" />`;
    }
}

module.exports = { Shapes, Circle, Triangle, Square };