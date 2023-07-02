// chapter 26 to 30

//question 8

// Generate a random secret number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user to input a number
const userInput = parseInt(
  prompt("Guess the secret number (between 1 and 10):")
);

// Check if the user input matches the secret number
if (userInput === secretNumber) {
  document.write("Congratulations! You guessed the secret number.");
} else {
  document.write(
    "Sorry, your guess is incorrect. The secret number was: " + secretNumber
  );
}
