

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

            return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${shapeSelection.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.monogram}</text></svg>`

        } else if (answers.shapeSelection === "Triangle") {
            let shapeSelection = new Triangle (
                this.monogram, 
                this.textColor, 
                this.shapeColor
                );

            return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${shapeSelection.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.monogram}</text></svg>`

        } else if (answers.shapeSelection === "Inverted Triangle") {
            let shapeSelection = new InvTriangle (
                this.monogram, 
                this.textColor, 
                this.shapeColor
                );

            return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${shapeSelection.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.monogram}</text></svg>`

        } else if (answers.shapeSelection === "Square") {
            let shapeSelection = new Square (
                this.monogram, 
                this.textColor, 
                this.shapeColor
                );

            return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${shapeSelection.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.monogram}</text></svg>`
            
        }  else if (answers.shapeSelection === "Diamond") {
            let shapeSelection = new Diamond (
                this.monogram, 
                this.textColor, 
                this.shapeColor
                );

            return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${shapeSelection.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.monogram}</text></svg>`
            
        } else if (answers.shapeSelection === "Hexagon") {
            let shapeSelection = new Hexagon (
                this.monogram, 
                this.textColor, 
                this.shapeColor
                );

            return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${shapeSelection.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.monogram}</text></svg>`
            
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

class InvTriangle extends Shapes {
    constructor(monogram, textColor, shapeColor) {
        super(monogram, textColor, "Inverted Triangle", shapeColor);
    }

    setColor(color) {
        this.shapeColor = color;
    }

    render() {
        return `<polygon points="150,200 243.6,37.8 56.4,37.8"  fill="${this.shapeColor}" />`;
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

class Diamond extends Shapes {
    constructor(monogram, textColor, shapeColor) {
        super(monogram, textColor, "Diamond", shapeColor);
    };

    setColor(color) {
        this.shapeColor = color;
    }

    render() {
        return `<polygon points="50,100 150,200 250,100 150,0 " fill="${this.shapeColor}" />`;
    }
}

class Hexagon extends Shapes {
    constructor(monogram, textColor, shapeColor) {
        super(monogram, textColor, "Hexagon", shapeColor);
    };

    setColor(color) {
        this.shapeColor = color;
    }

    render() {
        return `<polygon points="236.6,150 236.6,50 150,0 63.4,50 63.4,150 150,200 " fill="${this.shapeColor}" />`;
    }
}

module.exports = { Shapes, Circle, Triangle, InvTriangle, Square, Diamond, Hexagon };