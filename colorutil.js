// console.log('Hello Node!')

var red = process.argv[2]
var green = process.argv[3]
var blue = process.argv[4]

console.log(red, green, blue)

module.exports = {
    luminosity:(0.2126*red + 0.7152*green + 0.0722*blue),
    darkerLuminosity:((0.8*0.2126*red )+ (0.8*0.7152*green) + (0.8*0.0722*blue))
}



