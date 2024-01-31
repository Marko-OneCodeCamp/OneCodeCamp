console.log("Test Connection");
let show = () => {
function print_orders(orders){
    const ol = document.getElementById("printOrders");
    for(let value of orders ){
        const liElement = document.createElement("li");
        liElement.className = 'list-group-item';
        liElement.innerHTML = value;
        ol.appendChild(liElement);
    }
    
}
let orders = ['pizza','burger','sphag'];
print_orders(orders);
}


// ==================================EXercise 2=============================
let cards = {
    'King': 13,
    'Queen': 12,
    'Jack': 11,
    'Ace': 1
    };
const keys = ['King', 'Queen', 'Jack', 'Ace'];

function print_cards(cards) {
    const div = document.getElementById("exercise2");
    const pElement = document.createElement("p");
    const ol = document.getElementById("printCards");
    for (let key of keys){
        const liElement = document.createElement("li");
        liElement.className = 'list-group-item';
        liElement.innerHTML = key;
        ol.appendChild(liElement);
    }
    for (let key of keys) {
        const pElement = document.createElement("p");
        pElement.className = 'text-dark ';
        pElement.innerHTML = `The value of ${key} in Pyramid Solitaire is ${cards[key]}.`;
        div.appendChild(pElement);
        
    }
}

// =======================Exercise 3===========================
function randScore() {
    return Math.floor(Math.random() * 101);
}


function displayMsg(score) {
    const resultDiv = document.getElementById("karaokeResult");

    if (score < 50) {
        resultDiv.innerHTML = "Score below 50: Never sing again, ever!";
    } else if (score >= 50 && score <= 79) {
        resultDiv.innerHTML = "Score between 50-79: Practice more!";
    } else if (score >= 80 && score <= 94) {
        resultDiv.innerHTML = "Score between 80-94: You're getting better!";
    } else {
        resultDiv.innerHTML = "Score between 95-100: What an excellent singer!";
    }
}

const randomScore = randScore();


// =======================Activity 4==============================
function simulateBasketballPractice(attempts) {
    let successfulShots = 0;
    let epicFails = 0;

    for (let i = 1; i <= attempts; i++) {
        // Generate a random value between 0 and 1 to simulate the success of the shot
        const shotResult = Math.random();

        // Adjust the success rate as needed
        const successRate = 0.55; // You can change this value based on the desired success rate

        if (shotResult < successRate) {
            successfulShots++;
            console.log(`Attempt #${i}: Shooting the ball... Success! ... Got ${successfulShots}x success and ${epicFails}x epic fail(s) so far`);
        } else {
            epicFails++;
            console.log(`Attempt #${i}: Shooting the ball... Epic Fail! ... Got ${successfulShots}x success and ${epicFails}x epic fail(s) so far`);
        }
    }

    return { successfulShots, epicFails };
}

function main() {
    console.log("Practice starts...");
    const totalAttempts = 1000;
    const { successfulShots, epicFails } = simulateBasketballPractice(totalAttempts);
    console.log("Practice ended.");

    console.log(`Total attempts: ${totalAttempts}`);
    console.log(`Successful shots: ${successfulShots}`);
    console.log(`Epic fails: ${epicFails}`);
    console.log(`Missed shots: ${totalAttempts - successfulShots - epicFails}`);
}


// ======================Activity 5========================
function convert_to_blanks(numbers) {
    const blanks = numbers.map(number => '_').join(' ');
    console.log(blanks);
}

// Example usage:
const sample = [6, 1, 3, 5, 7];


