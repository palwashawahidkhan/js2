// chapter 26 to 30

// question 3

const userInput = parseFloat(prompt("Enter a number:"));
const absoluteValue = Math.abs(userInput);

alert(`Absolute value of ${userInput} is ${absoluteValue}`);


//questions 4


// Generate a random number between 1 and 6
const diceValue = Math.floor(Math.random() * 6) + 1;

document.write("Dice Value: " + diceValue);


// question 5

// Generate a random number between 0 and 1
const randomValue = Math.random();

// Assign heads or tails based on the random number
const coinValue = randomValue < 0.5 ? "Heads" : "Tails";


// question 6

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

document.write("Random Number: " + randomNumber);




