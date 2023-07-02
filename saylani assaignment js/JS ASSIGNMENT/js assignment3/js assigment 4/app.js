// chapter 26 to 30

// question 7

const userInput = prompt("Enter your weight:");
let weight;

if (userInput.includes("kgs") || userInput.includes("kilograms")) {
  weight = parseFloat(userInput);
} else {
  weight = parseInt(userInput);
}

document.write("Weight: " + weight + " kgs");


