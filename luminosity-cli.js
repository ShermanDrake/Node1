var red = process.argv[2]
var green = process.argv[3]
var blue = process.argv[4]

module.exports = {
    luminosity:(0.2126*red + 0.7152*green + 0.0722*blue),
    darkerLuminosity:((0.8*0.2126*red )+ (0.8*0.7152*green) + (0.8*0.0722*blue))
}

var colorutil = require("./colorutil.js")
console.log(colorutil.luminosity, colorutil.darkerLuminosity)