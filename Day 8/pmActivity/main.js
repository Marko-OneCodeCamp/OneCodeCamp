let timer;
let minutes;
let seconds;

function startTimer() {
    const input = prompt('Enter timer, between 1 and 60 minutes.');
    minutes = parseFloat(input);
    if (isNaN(minutes) || minutes < 1 || minutes > 60) {
        alert('Please enter a valid time between 1 and 60 minutes.');
        return;
    }
    seconds = 0;
    updateTimerDisplay();
    timer = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
            clearInterval(timer);
            alert('Time is up!');
        } else {
            decrementTime();
            updateTimerDisplay();
        }
    }, 1000);
}
function resetTimer() {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    updateTimerDisplay();
}
function decrementTime() {
    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        minutes--;
        seconds = 59;
    }
}
function updateTimerDisplay() {
    const timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
