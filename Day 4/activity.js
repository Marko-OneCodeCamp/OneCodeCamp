const readline = require('readline');


// // Activity 1
// for (i = 1; i <=1000; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// Activity 2
// for (i = 8; i <= 1000; i+=8){
//     console.log(` Counting by 8 starting with: ${i}`); 
    
// }

// // Activity 3
// for (var i = 1; i <=1000; i++) {
//     if( i % 3 ==0){
//         console.log(` ${i} This number is multitple of 3`);
//     }else{
//         console.log(` ${i} Not Multitple `);
//     }
// }


// ===================================================
// =======================AFTERNOON===================
// Array Activity 1
// let numbers = [2, 5, 8, 11, 14];
// let sum = 0;
// for (let i =0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum);

// Activity 2
// let  numbers2 = [13, 143, 88, 65, 120];
// let sumMean = 0;
// for (let i =0; i < numbers2.length; i++) {
//     sumMean += numbers2[i];
// }
// const average = sumMean / numbers2.length;
// console.log(average);

// Activity 3
// let evenNum = [];
// for (let i =0; i <=100; i++) {
//     if (i%2 == 0){
//         evenNum.push(i)
//     }
// }
// console.log(evenNum);

// Activity4
let secretNumber = Math.floor(Math.random() * 10) + 1;
let guessedNumber;
let attempts = 0;
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askForGuess() {
    rl.question('Enter your guess:', (guessedNumber) => {
    guessedNumber = parseInt(guessedNumber);
    attempts++;

    if (guessedNumber < secretNumber) {
        console.log('Too low! Try again.');
        askForGuess();
    } else if (guessedNumber > secretNumber) {
        console.log('Too high! Try again.');
        askForGuess();
    } else {
        console.log(`Congratulations! You guessed the correct number: ${secretNumber}`);
        console.log(`It took you ${attempts} attempts.`);
        rl.close();
    }
    });
}

askForGuess();
