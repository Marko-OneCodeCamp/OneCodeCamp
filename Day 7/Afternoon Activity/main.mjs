import { createInterface } from 'readline';

// Task1

let secretNumber = Math.floor(Math.random() * 10) + 1;
let rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function askForGuess() {
    rl.question('Guess what the random number is:', (guessedNumber) => {
        guessedNumber = parseInt(guessedNumber);
        if (!isNaN(guessedNumber)) {
            if (guessedNumber < secretNumber) {
                console.log('Too low! Try again.');
                askForGuess();
            } else if (guessedNumber > secretNumber) {
                console.log('Too high! Try again.');
                askForGuess();
            } else {
                console.log(`Congratulations! You guessed the correct number: ${secretNumber}`);
                rl.close();
            }
        } else {
            console.log('Invalid input. Please enter a valid number.');
            askForGuess();
        }
    });
}

askForGuess();
