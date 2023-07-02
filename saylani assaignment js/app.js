// chapter 26 to 30

//question 1

const userInput = parseInt(prompt("Enter a positive integer:"));
const number = userInput;
const roundOff = Math.round(userInput);
const floorValue = Math.floor(userInput);
const ceilValue = Math.ceil(userInput);

document.write("Number: " + number + "<br>");
document.write("Round-off Value: " + roundOff + "<br>");
document.write("Floor Value: " + floorValue + "<br>");
document.write("Ceil Value: " + ceilValue + "<br>");


