const { Shapes, Circle, Triangle, Square } = require("./shapes.js");

describe("Circle", () => {
    it("Should return a pink circle", () => {
        const shape = new Circle();
        shape.setColor("pink");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="pink" />');
    })
})

describe("Triangle", () => {
    it("Should return a blue triangle", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182"  fill="blue" />');
    })
})

describe("Square", () => {
    it("Should return a yellow square", () => {
        const shape = new Square();
        shape.setColor("yellow");
        expect(shape.render()).toEqual('<rect x="40" y="40" width="220" height="120" fill="yellow" />');
    })
})