

class Shapes {
    constructor(monogram, textColor, shapeSelection, shapeColor) {
        this.monogram = monogram;
        this.textColor = textColor;
        this.shapeSelection = shapeSelection;
        this.shapeColor = shapeColor;
    }

    createShape(answers) {
        if (answers.shapeSelection === "Circle") {
            let shapeSelection = new Circle (anaswers.monogram, answers.textColor, answers.shapeColor)
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
            <circle cx="25" cy="75" r="20" stroke="transparent" fill="${shapeColor}" stroke-width="5"/>
        </svg>
        `
    }
}



module.exports = Shapes;