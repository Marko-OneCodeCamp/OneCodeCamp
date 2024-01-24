// callback
function emitRandomNumber(attempt, maxAttempts, callback) {
    if (attempt > maxAttempts) {
        console.log("Max attempts reached. Exiting.");
        return;
    }
    console.log(`Attempt #${attempt}. EmitRandomNumber is called.`);
    setTimeout(() => {
        console.log("2 seconds have lapsed.");
        const randomNumber = Math.floor(Math.random() * 101);
        console.log(`Random number generated is ${randomNumber}.`);
        if (randomNumber < 80) {
        console.log("- - - - -");
        emitRandomNumber(attempt + 1, maxAttempts, callback);
        } else {
        console.log("- - - - -");
        console.log(`Random number generated is ${randomNumber}!!!`);
        console.log("- - - - -");
        callback();
        }
    }, 2000);
};
emitRandomNumber(1, 10, () => {
    console.log("Task completed!");
});
