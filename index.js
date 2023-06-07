const fs = require("fs");
const inquirer = require("inquirer");
const shapeSelection = require("./lib/shapes.js");

const colorNames = [
    "black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua", "aliceblue", "antiquewhite", "aquamarine", "azure", "beige", "bisque", "blanchedalmond", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "gainsboro", "ghostwhite", "gold", "goldenrod", "greenyellow", "honeydew", "hotpink", "indianared", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "limegreen", "linen", "magenta", "marron", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rosybrown", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "whitesmoke", "yellowgreen"
]


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
            const colorAnswer = answer.trim().toLowerCase().replace(/\s+/g, "");

            if (colorAnswer.startsWith("#")) {
                const hexColor = colorAnswer.substring(1);
                
                const validHex = /^([0-9a-fA-F]{3}){1,2}$/.test(hexColor);

                if (!validHex) {
                    return "Please enter a valid hexadecimal color starting with \'#\' and including three or six alphanumeric characters."
                }

                return true;

            } else if (colorNames.includes(colorAnswer.toLowerCase())) {
                return true;
            } else {
                return "Please enter a valid hexadecimal color starting with \'#\' and including three or six alphanumeric characters."
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
            const colorAnswer = answer.trim().toLowerCase().replace(/\s+/g, "");

            if (colorAnswer.startsWith("#")) {
                const hexColor = colorAnswer.substring(1);
                const validHex = /^([0-9a-fA-F]{3}){1,2}$/.test(hexColor);

                if (!validHex) {
                    return "Please enter a valid hexadecimal color starting with \'#\' and including three or six alphanumeric characters."
                }

                return true;
                
            } else if (colorNames.includes(colorAnswer.toLowerCase())) {
                return true;
            } else {
                return "Please enter a valid hexadecimal color starting with \'#\' and including three or six alphanumeric characters."
            }
        }
    }
])
.then(answers => {
    console.log(answers.textColor, answers.shapeColor);
    /*
    fs.writeFile("./examples/logo_exp.svg", shapeSelection(answers), (err) => {
        if (err) {
            return console.error(err);
        }
        console.log("SVG created");
    })
    */
})