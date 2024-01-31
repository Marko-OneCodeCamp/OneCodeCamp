const readline = require('readline');

// // Activity 1
// // step 1
// // function greet() {
// //     console.log("Hello! OCC Peeps!");
// // }
// // // step 2
// // greet();
// // // step 3 
// // const add = function(a, b) {
// //     return a + b;
// // };
// // // step 4
// // const sum = add(5, 3);
// // // step 5
// // console.log("sum result:", sum);
// // // step 6
// // const multiply = function(x, y) {
// //     return x * y;
// // };
// // // Step 7
// // const product = multiply(4, 2);
// // // Step 8
// // console.log("product result:", product);
// // // Step 9
// // const isEven = function(num) {
// //     if(num % 2 === 0){
// //         return true;
// //     }else {
// //         return false;
// //     }
// // };

// // // Step 10
// // const even = isEven(6);

// // // Step 11
// // console.log("Is even:", even);

// // // Step 12
// // const square = function(number) {
// //     return number * number;
// // };

// // // Step 13
// // const squaredValue = square(3);

// // // Step 14
// // console.log("Squared Value result:", squaredValue);

// // // Step 15: Create a function expression named fullName
// // const fullName = function(firstName, lastName) {
// //     return firstName + " " + lastName;
// // };

// // // Step 16
// // const pangalan = fullName('John', 'Doe');

// // // Step 17
// // console.log("Full Name:", pangalan); // name is deprecated

// // // Step 18
// // const capitalize = function(str) {
// //     return str.charAt(0).toUpperCase() + str.slice(1);
// // };

// // const toUpperCase = function(str) {
// //     return str.toUpperCase();
// // };

// // // Step 19
// // const capitalizedString = capitalize('javascript');
// // const toUpperCaseString = toUpperCase('javascript');

// // // Step 20
// // console.log("Capitalized String:", capitalizedString);
// // console.log("Uppercased String:", toUpperCaseString);


// // =================================Activity 2======================================
// // // step 1
// // const isEven2 = function(num) {
// //     if(num == 0){
// //         return 'Number  Zero not odd or even';
// //     }else if(num % 2 === 0){
// //         return true;
// //     }else{
// //         return false;
// //     }
// // };
// // // step 2
// // for (let i = 0; i <= 10; i++) {
// //     const result = isEven2(i);
// //     console.log(`${i} is : ${result}`);
// // }

// // // step 3
// // function multiply2(a, b) {
// //     return a * b;
// // }

// // // step 4
// // let rl = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // });
// // async function promptUserForNumbers() {
// //     while (true) {
// //         const num1 = await askQuestion('Enter the first number (or a negative number to exit): ');
// //         const parsedNum1 = parseFloat(num1);
// //         if (parsedNum1 < 0 || isNaN(parsedNum1)) {
// //             rl.close();
// //             break;
// //         }
// //         const num2 = await askQuestion('Enter the second number: ');
// //         const parsedNum2 = parseFloat(num2);
// //         if (parsedNum2 < 0 || isNaN(parsedNum2)) {
// //             rl.close();
// //             break;
// //         }
// //         const result = multiply2(parsedNum1, parsedNum2);
// //         console.log(`The product of ${parsedNum1} and ${parsedNum2} is: ${result}`);
// //         break;
// //     }
// // }
// // function askQuestion(question) {
// //     return new Promise((resolve) => {
// //         rl.question(question, resolve);
// //     });
// // }

// // promptUserForNumbers();

// // Step 5
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// // // // Step 6
// // console.log(reverseString('hello'));

// // Step 7
// // function countVowels(str) {
// //     const vowels = 'aeiouAEIOU';
// //     let count = 0;
// //     for (let index of str) {
// //         if (vowels.includes(index)) {
// //             count++;
// //         }
// //     }
// //     return count;
// // }

// // // Step 8
// // console.log(countVowels('JavaScript'));

// // // Step 9
// // function findMax(numbers) {
// //     return Math.max(...numbers); 
// // }
// // function findMax2(numbers){
// //     let max = 0;
// //     for(num of numbers) {
// //         if(num > max){
// //             max = num;
// //         }
// //     }
// //     return max;
// // }
// // // Step 10: 
// // console.log(findMax([4, 9, 2, 7, 5]));
// // console.log(findMax2([20, 9, 2, 7, 5]));

// // // Step 11
// // function calculateFactorial(num) {
// //     if (num === 0 || num === 1) {
// //         return 1;
// //     } else {
// //         return num * calculateFactorial(num - 1);
// //     }
// // }
// // // Step 12
// // console.log(calculateFactorial(5));

// // // Step 13  isPalindrome
// // function isPalindrome(str) {
// //     const reversedStr = reverseString(str);
// //     return str === reversedStr;
// // }

// // // Step 14
// // console.log(isPalindrome('level'));
// // console.log(isPalindrome('hakdog'));

// // Step 15 sumArray
// function sumArray(numbers) {
//     return numbers.reduce((sum, num) => sum + num, 0);
// }

// function sumArray2(numbers) {
//     let sum2 = 0;
//     for (let num  of numbers) {
//         sum2 += num
//     }
//     return sum2;
// }

// // // // Step 16:
// console.log(sumArray([1, 2, 3, 4, 5]));
// console.log(sumArray2([1, 2, 3, 4, 5]));

// // //Step 17 and 18; already done in activity 1 step 18-19

// // Step 19
// const filterEvenNumbers = numbers => numbers.filter(num => num % 2 === 0);

// const filterEvenNumbers2 = numbers => {
//     const isEven =[];
//     for(let num of numbers) {
//         if(num % 2 === 0){
//             isEven.push(num);
//         }
//     }
//     return isEven;
// }


// // // Step 20
// const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbersArray = filterEvenNumbers(originalArray);
// const evenNumbersArray2 = filterEvenNumbers2(originalArray);
// // Log the result to the console
// console.log(evenNumbersArray);
// console.log(evenNumbersArray2);



