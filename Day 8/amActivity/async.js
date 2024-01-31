async function emitRandomNumber(maxAttempts) {
    try {
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            console.log(`Attempt #${attempt}. EmitRandomNumber is called.`);
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("2 seconds have lapsed.");
                    const randomNumber = Math.floor(Math.random() * 101);
                    console.log(`Random number generated is ${randomNumber}.`);
                    if (randomNumber < 80) {
                        console.log("- - - - -");
                        resolve();
                    } else {
                        console.log("- - - - -");
                        console.log(`Random number generated is ${randomNumber}!!!`);
                        console.log("- - - - -");
                        console.log("Task completed!");
                        reject("Task completed!");
                    }
                }, 2000);
            });
        }
        console.log("Max attempts reached. Exiting.");
    } catch (error) {
        console.error(error);
    }
}
emitRandomNumber(10);
