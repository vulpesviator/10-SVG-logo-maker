

class Shapes {
    constructor(monogram, fontSelection, textColor, shapeSelection, shapeColor) {
        this.monogram = monogram;
        this.fontSelection = fontSelection;
        this.textColor = textColor;
        this.shapeSelection = shapeSelection;
        this.shapeColor = shapeColor;
    }

    createShape(answers) {
        if (answers.shapeSelection === "Circle") {
            let shapeSelection = new Circle (
                this.monogram,
                this.fontSelection, 
                this.textColor, 
                this.shapeColor
                );

            return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${shapeSelection.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}" ${shapeSelection.setFont()}>${this.monogram}</text></svg>`

        } else if (answers.shapeSelection === "Triangle") {
            let shapeSelection = new Triangle (
                this.monogram, 
                this.fontSelection, 
                this.textColor, 
                this.shapeColor
                );

            return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${shapeSelection.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}" ${shapeSelection.setFont()}>${this.monogram}</text></svg>`

        } else if (answers.shapeSelection === "Inverted Triangle") {
            let shapeSelection = new InvTriangle (
                this.monogram, 
                this.fontSelection, 
                this.textColor, 
                this.shapeColor
                );

            return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${shapeSelection.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}" ${shapeSelection.setFont()}>${this.monogram}</text></svg>`

        } else if (answers.shapeSelection === "Square") {
            let shapeSelection = new Square (
                this.monogram, 
                this.fontSelection, 
                this.textColor, 
                this.shapeColor
                );

            return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${shapeSelection.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}" ${shapeSelection.setFont()}>${this.monogram}</text></svg>`
            
        }  else if (answers.shapeSelection === "Diamond") {
            let shapeSelection = new Diamond (
                this.monogram, 
                this.fontSelection, 
                this.textColor, 
                this.shapeColor
                );

            return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${shapeSelection.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}" ${shapeSelection.setFont()}>${this.monogram}</text></svg>`
            
        } else if (answers.shapeSelection === "Hexagon") {
            let shapeSelection = new Hexagon (
                this.monogram, 
                this.fontSelection, 
                this.textColor, 
                this.shapeColor
                );

            return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${shapeSelection.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}" ${shapeSelection.setFont()}>${this.monogram}</text></svg>`
            
        } else {
            throw Error("Please choose a shape from the list.")
        }
    }
}

class Circle extends Shapes {
    constructor(monogram, fontSelection, textColor, shapeColor) {
        super(monogram, fontSelection, textColor, "Circle", shapeColor);
    };

    setFont() {
        if (this.fontSelection === "Serif") {
            return `font-family="Times New Roman, Georgia, serif";`
        } else if (this.fontSelection === "Sans-Serif") {
            return `font-family="Arial, Helvetica, sans-serif"`;
        } else if (this.fontSelection === "Monospace") {
            return `font-family="Courier, Lucida, monospace"`;
        } else if (this.fontSelection === "Cursive") {
            return `font-family="Brush Script, Bradley Hand, Comic Sans MS, cursive"`;
        } else if (this.fontSelection === "Fantasy") {
            return `font-family="Luminari, Apple Chancery, Zapf Chancery, Gabriola, serif"`;
        } else {
            return ``;
        }
    }

    setColor(color) {
        this.shapeColor = color;
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shapes {
    constructor(monogram, fontSelection, textColor, shapeColor) {
        super(monogram, fontSelection, textColor, "Triangle", shapeColor);
    }

    setFont() {
        if (this.fontSelection === "Serif") {
            return `font-family="Times New Roman, Georgia, serif";`
        } else if (this.fontSelection === "Sans-Serif") {
            return `font-family="Arial, Helvetica, sans-serif"`;
        } else if (this.fontSelection === "Monospace") {
            return `font-family="Courier, Lucida, monospace"`;
        } else if (this.fontSelection === "Cursive") {
            return `font-family="Brush Script, Bradley Hand, Comic Sans MS, cursive"`;
        } else if (this.fontSelection === "Fantasy") {
            return `font-family="Luminari, Apple Chancery, Zapf Chancery, Gabriola, serif"`;
        } else {
            return ``;
        }
    }

    setColor(color) {
        this.shapeColor = color;
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182"  fill="${this.shapeColor}" />`;
    }
}

class InvTriangle extends Shapes {
    constructor(monogram, fontSelection, textColor, shapeColor) {
        super(monogram, fontSelection, textColor, "Inverted Triangle", shapeColor);
    }

    setFont() {
        if (this.fontSelection === "Serif") {
            return `font-family="Times New Roman, Georgia, serif";`
        } else if (this.fontSelection === "Sans-Serif") {
            return `font-family="Arial, Helvetica, sans-serif"`;
        } else if (this.fontSelection === "Monospace") {
            return `font-family="Courier, Lucida, monospace"`;
        } else if (this.fontSelection === "Cursive") {
            return `font-family="Brush Script, Bradley Hand, Comic Sans MS, cursive"`;
        } else if (this.fontSelection === "Fantasy") {
            return `font-family="Luminari, Apple Chancery, Zapf Chancery, Gabriola, serif"`;
        } else {
            return ``;
        }
    }

    setColor(color) {
        this.shapeColor = color;
    }

    render() {
        return `<polygon points="150,200 243.6,37.8 56.4,37.8"  fill="${this.shapeColor}" />`;
    }
}

class Square extends Shapes {
    constructor(monogram, fontSelection, textColor, shapeColor) {
        super(monogram, fontSelection, textColor, "Square", shapeColor);
    };

    setFont() {
        if (this.fontSelection === "Serif") {
            return `font-family="Times New Roman, Georgia, serif";`
        } else if (this.fontSelection === "Sans-Serif") {
            return `font-family="Arial, Helvetica, sans-serif"`;
        } else if (this.fontSelection === "Monospace") {
            return `font-family="Courier, Lucida, monospace"`;
        } else if (this.fontSelection === "Cursive") {
            return `font-family="Brush Script, Bradley Hand, Comic Sans MS, cursive"`;
        } else if (this.fontSelection === "Fantasy") {
            return `font-family="Luminari, Apple Chancery, Zapf Chancery, Gabriola, serif"`;
        } else {
            return ``;
        }
    }

    setColor(color) {
        this.shapeColor = color;
    }

    render() {
        return `<rect x="40" y="40" width="220" height="120" fill="${this.shapeColor}" />`;
    }
}

class Diamond extends Shapes {
    constructor(monogram, fontSelection, textColor, shapeColor) {
        super(monogram, fontSelection, textColor, "Diamond", shapeColor);
    };

    setFont() {
        if (this.fontSelection === "Serif") {
            return `font-family="Times New Roman, Georgia, serif";`
        } else if (this.fontSelection === "Sans-Serif") {
            return `font-family="Arial, Helvetica, sans-serif"`;
        } else if (this.fontSelection === "Monospace") {
            return `font-family="Courier, Lucida, monospace"`;
        } else if (this.fontSelection === "Cursive") {
            return `font-family="Brush Script, Bradley Hand, Comic Sans MS, cursive"`;
        } else if (this.fontSelection === "Fantasy") {
            return `font-family="Luminari, Apple Chancery, Zapf Chancery, Gabriola, serif"`;
        } else {
            return ``;
        }
    }

    setColor(color) {
        this.shapeColor = color;
    }

    render() {
        return `<polygon points="50,100 150,200 250,100 150,0 " fill="${this.shapeColor}" />`;
    }
}

class Hexagon extends Shapes {
    constructor(monogram, fontSelection, textColor, shapeColor) {
        super(monogram, fontSelection, textColor, "Hexagon", shapeColor);
    };

    setFont() {
        if (this.fontSelection === "Serif") {
            return `font-family="Times New Roman, Georgia, serif";`
        } else if (this.fontSelection === "Sans-Serif") {
            return `font-family="Arial, Helvetica, sans-serif"`;
        } else if (this.fontSelection === "Monospace") {
            return `font-family="Courier, Lucida, monospace"`;
        } else if (this.fontSelection === "Cursive") {
            return `font-family="Brush Script, Bradley Hand, Comic Sans MS, cursive"`;
        } else if (this.fontSelection === "Fantasy") {
            return `font-family="Luminari, Apple Chancery, Zapf Chancery, Gabriola, serif"`;
        } else {
            return ``;
        }
    }

    setColor(color) {
        this.shapeColor = color;
    }

    render() {
        return `<polygon points="236.6,150 236.6,50 150,0 63.4,50 63.4,150 150,200 " fill="${this.shapeColor}" />`;
    }
}

module.exports = { Shapes, Circle, Triangle, InvTriangle, Square, Diamond, Hexagon };