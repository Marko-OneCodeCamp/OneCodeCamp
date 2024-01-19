// // =========================Acitivy 3========================= 
// // exercise 1
// function greet(name) {
//     console.log(`Hello, ${name}!`);
//     }
//     greet("Marko");

// // Execrcise 2
// const add = function (a, b) {
// return a + b;
// };
// console.log(add(5, 7)); 

// // exercise 3
// function isEven(number) {
// return number % 2 === 0;
// }
// console.log(isEven(4)); // true
// console.log(isEven(7)); // false

// // Exercise 4
// var globalVar = "hello world";
// function scope (){
//     var globalVar2 = "Var Scope!"
// }
// console.log(globalVar); 
// // console.log(globalVar2); //will cause error


// // Exercise 5
// hoistedFunction(); 
// function hoistedFunction() {
//     console.log("This function was hoisted.");
// }

// // Exercise 6
// function mathOperation(a, b, callback) {
//     return callback(a, b);
//     }
//     const add2 = (a, b) => a + b;
//     const subtract = (a, b) => a - b;
//     const multiply = (a, b) => a * b;
//     const divide = (a, b) => a / b

// console.log(mathOperation(5, 3, add2)); 
// console.log(mathOperation(5, 3, subtract)); 
// console.log(mathOperation(5, 3, multiply));
// console.log(mathOperation(6, 3, divide)); 

// Exercise 7
function counter() {
    let count = 0;
    return function () { 
    count++;
    console.log(count);
    };
    }
    // this is will not work because we are returning anonymouse function
    // counter();
    // counter();
    const counter1 = counter(); //variable is stored in ram modules.. so it holds the data of counter1
    const counter2 = counter();
    counter1(); 
    counter1();
    counter1(); 
    counter2(); // Output: 1
    counter2();

    // Exercise 8
    function applyFunction(func, array) {
        const result = [];
        for (let item of array) {
        result.push(func(item));
        }
        return result;
}

const numbers = [1, 2, 3, 4, 5];
const square = (x) => x * x;
console.log(applyFunction(square, numbers)); // Output: [1, 4, 9, 16, 25]

// Exercise 9
function getUserData(callback) {
    setTimeout(() => {
        const user = { name: "John", age: 30 };
        callback(user);
    }, 2000);
}
getUserData(user => console.log("User Data:", user));