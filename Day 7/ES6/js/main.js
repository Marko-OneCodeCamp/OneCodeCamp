console.log("Test connection");
// Task1
const task1 = ()=>{
    const getSquare = (num) => {
    const square = num ** 2;
    console.log(`Square of ${num} is: ${square}`);
    const p = document.querySelector('#result');
    const pCode = document.querySelector('#code');
    pCode.innerText = `const getSquare = (num) => {
    const square = num ** 2
    }`
    p.innerText = `Answer: Square of ${num} is: ${square}`
    pCode.classList.toggle('d-none');
    p.classList.toggle('d-none');
    };
    getSquare(5);
}
// Task2
const task2 = ()=>{
    const greetMsg = (name, age) => {
        let greet = `Welcome, ${name}! You are ${age} years old.😂😅`;
        console.log(`Welcome, ${name}! You are ${age} years old.`);
        const p2 = document.querySelector('#result2');
        const pCode2 = document.querySelector('#code2');
        pCode2.innerText = `const greetMsg = (name, age) => {
        let greet = console.log('Welcome, ${name}! You are ${age} years old.');
        }`
        p2.innerText = `Answer: ${greet}`
        pCode2.classList.toggle('d-none');
        p2.classList.toggle('d-none');
    };
    greetMsg('Marko', 21);
};


// Task3
const task3 = ()=>{
    const person = {
        firstName: 'Marko',
        lastName: 'Santos',
    };
    const { firstName, lastName } = person;
    console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
    const p3 = document.querySelector('#result3');
        const pCode3 = document.querySelector('#code3');
        pCode3.innerText = `const person = {
            firstName: 'Marko',
            lastName: 'Santos',
        };
        const { firstName, lastName } = person;
        console.log('First Name: ${firstName}, Last Name: ${lastName}.');`
        p3.innerText = `Answer: First Name: ${firstName}, Last Name: ${lastName}`
        pCode3.classList.toggle('d-none');
        p3.classList.toggle('d-none');
}

const task4 = ()=>{
    const num1 = [1, 2, 3];
    const num2 = [4, 5, 6];
    const mergedNum = [...num1, ...num2];
    console.log('Merged Array:', mergedNum);
    const p4 = document.querySelector('#result4');
        const pCode4 = document.querySelector('#code4');
        pCode4.innerText = `const num1 = [1, 2, 3];
        const num2 = [4, 5, 6];
        const mergedNum = [...num1, ...num2];
        console.log('Merged Array:', mergedNum);`
        p4.innerText = `Answer: Merged Array:', ${mergedNum}`
        pCode4.classList.toggle('d-none');
        p4.classList.toggle('d-none');
}

// Task5
//Formula for Rectangle -  Area = width * length
const task5 = () => {
    let area; 
    const getArea = (length = 1, width = 1) => {
        area = length * width;
        console.log(`Rectangle Area: ${area}`);
    };
    getArea();
    getArea(4, 6);
    const p5 = document.querySelector('#result5');
    const pCode5 = document.querySelector('#code5');
    pCode5.innerText = `Formula for Rectangle -  Area = width * length
    let area; 
    const getArea = (length = 1, width = 1) => {
        area = length * width;
        console.log('Rectangle Area: ${area}');
    };
    getArea();
    getArea(4, 6);`;
    p5.innerText = `Answer: Rectangle Area: ${area}`;
    pCode5.classList.toggle('d-none');
    p5.classList.toggle('d-none');
}
