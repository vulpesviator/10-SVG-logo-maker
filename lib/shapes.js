

class Shapes {
    constructor(monogram, textColor, shapeSelection, shapeColor) {
        this.monogram = monogram;
        this.textColor = textColor;
        this.shapeSelection = shapeSelection;
        this.shapeColor = shapeColor;
    }

    createShape(answers) {
        if (answers.shapeSelection === "Circle") {
            let shapeSelection = new Circle (answers.monogram, answers.textColor, answers.shapeColor)
            return shapeSelection.render()
        }
    }
}

class Circle extends Shapes {
    constructor(monogram, textColor, shapeSelection, shapeColor) {
        super(monogram, textColor, shapeSelection, shapeColor);
    };

    render() {
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.monogram}</text>
        </svg>
        `
    }
}



module.exports = Shapes;