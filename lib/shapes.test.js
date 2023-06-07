const { Shapes, Circle, Triangle, Square } = require("./shapes.js");

describe("Shapes", () => {
  describe("createShape", () => {
    it("Should return a navy circle with a white W in the middle", () => {
      const shape = new Shapes("W", "white", "Circle", "navy");
      const answers = { shapeSelection: "Circle" };

      expect(shape.createShape(answers))
        .toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="navy" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">W</text></svg>`);
    });

    it("Should throw an error for an invalid shape selection", () => {
        const shape = new Shapes("W", "white", "Rhombus", "navy");
        const answers = { shapeSelection: "Rhombus" };

      expect(() => shape.createShape(answers)).toThrowError("Please choose a shape from the list.");
    })
  });
});

describe("Circle", () => {
  it("Should return a pink circle", () => {
    const shape = new Circle();
    shape.setColor("pink");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="pink" />'
    );
  });
});

describe("Triangle", () => {
  it("Should return a blue triangle", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182"  fill="blue" />'
    );
  });
});

describe("Square", () => {
  it("Should return a yellow square", () => {
    const shape = new Square();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(
      '<rect x="40" y="40" width="220" height="120" fill="yellow" />'
    );
  });
});
