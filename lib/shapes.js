

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
        <svg></svg>
        `
    }
}



module.exports = Shapes;