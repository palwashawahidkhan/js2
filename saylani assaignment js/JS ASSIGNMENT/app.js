// chapter 26 to 30

// question 2

const userInput = parseFloat(prompt("Enter a negative floating-point number:"));
const number = userInput;
const roundOff = Math.round(userInput);
const floorValue = Math.floor(userInput);
const ceilValue = Math.ceil(userInput);

document.write("Number: " + number + "<br>");
document.write("Round-off Value: " + roundOff + "<br>");
document.write("Floor Value: " + floorValue + "<br>");
document.write("Ceil Value: " + ceilValue + "<br>");

