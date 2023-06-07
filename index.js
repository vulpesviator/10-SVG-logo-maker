const fs = require("fs");
const inquirer = require("inquirer");
const shapeSelection = require("./lib/shapes.js");


inquirer.prompt([
    {
        type: "input",
        message: "Please type the three characters you'd like on your logo:",
        name: "monogram",
        validate(chars) {
            if (chars.length > 3) {
                return "That is more than three characters. Please try again:"
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Please enter a text color by name or if you have the specific hexadecimal number, please enter that started with the '#' sign:",
        name: "textColor",
        validate(answer) {
            if (answer.includes("#")) {
                const textcolors = answer.match(/^#(?:([0-9a-fA-F]{3}){1,2})$/);

                if (textcolors === null) {
                    return "Please enter a valid hexadecimal color starting with \"#\" and including three or six alphanumeric characters: "
                } else {
                    return true;
                }
            }
        }
    },
    {
        type: "list",
        message: "Please select a shape for your logo:",
        choices: ["Circle", "Triangle", "Square"],
        name: "shapeSelection",
        default: "Circle"

    },
    {
        type: "input",
        message: "Please enter a shape color different from your text color by name or if you have the specific hexadecimal number, please enter that started with the '#' sign:",
        name: "shapeColor",
        validate(answer) {
            if (answer.includes("#")) {
                const textcolors = answer.match(/^#(?:([0-9a-fA-F]{3}){1,2})$/);

                if (textcolors === null) {
                    return "Please enter a valid hexadecimal color starting with \"#\" and including three or six alphanumeric characters: "
                } else {
                    return true;
                }
            }
        }
    }
])
.then(answers => {
    console.log(answers);
    fs.writeFile("./examples/logo_exp.svg", shapeSelection(answers), (err) => {
        if (err) {
            return console.error(err);
        }
        console.log("SVG created");
    })
})