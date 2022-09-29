game.splash("Let's calculate the area and perimeter of a rectangle")
let length = game.askForNumber("Enter the length of rectangle (cm):")
let width = game.askForNumber("Enter the width of rectangle (cm):")
let perimeter = 2 * (length + width)
game.splash("The perimeter of a rectangle dimensions:" + length + "cm by" + width + "cm is " + convertToText(perimeter) + "cm")
let area = length * width
game.splash("The area of a rectangle dimensions:" + length + "cm by" + width + "cm is " + convertToText(area) + "cm^2")
game.splash("Done")
