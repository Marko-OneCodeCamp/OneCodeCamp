function emitRandomNumber(attempt, maxAttempts) {
    return new Promise((resolve, reject) => {
        if (attempt > maxAttempts) {
            reject("Max attempts reached. Exiting.");
            return;
        }
        console.log(`Attempt #${attempt}. EmitRandomNumber is called.`);
        setTimeout(() => {
                console.log("2 seconds have lapsed.");
                const randomNumber = Math.floor(Math.random() * 101);
                console.log(`Random number generated is ${randomNumber}.`);
            if (randomNumber < 80) {
                console.log("- - - - -");
                resolve(emitRandomNumber(attempt + 1, maxAttempts));
            } else {
                console.log("- - - - -");
                console.log(`Random number generated is ${randomNumber}!!!`);
                console.log("- - - - -");
                resolve("Task completed!");
            }
        }, 2000);
    });
}
emitRandomNumber(1, 10)
    .then(result => console.log(result))
    .catch(error => console.error(error));
