console.log('test connection');

const div = document.querySelector('#container');
const colorPicker = document.getElementById('favcolor');
const resetButton = document.getElementById('reset');
const pink = document.getElementById('pink');
const blue = document.getElementById('blue');
const purple = document.getElementById('purple');
let selectedColor = colorPicker.value;
let selectedColorDiv = null;

function createCircle(x, y, color) {
    const diameter = Math.floor(Math.random() * 150 + 11);
    const circleDiv = document.createElement('div');
    circleDiv.className = 'circle';
    circleDiv.style.left = x + 'px';
    circleDiv.style.top = y + 'px';
    circleDiv.style.width = diameter + 'px';
    circleDiv.style.height = diameter + 'px';
    circleDiv.style.backgroundColor = color;

    // Add click event listener to the created circle div
    circleDiv.addEventListener('click', function () {
        if (selectedColorDiv) {
            selectedColorDiv.style.border = '2px solid transparent';
        }
        selectedColorDiv = circleDiv;
        circleDiv.style.border = '2px solid black';
    });

    div.appendChild(circleDiv);
}

document.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;
    createCircle(x, y, selectedColor);
});

pink.addEventListener('click', function () {
    selectedColor = 'pink';
    if (selectedColorDiv) {
        selectedColorDiv.style.border = '2px solid transparent';
    }
    selectedColorDiv = pink;
    pink.style.border = '2px solid black';
});

blue.addEventListener('click', function () {
    selectedColor = 'blue';
    if (selectedColorDiv) {
        selectedColorDiv.style.border = '2px solid transparent';
    }
    selectedColorDiv = blue;
    blue.style.border = '2px solid black';
});

purple.addEventListener('click', function () {
    selectedColor = 'purple';
    if (selectedColorDiv) {
        selectedColorDiv.style.border = '2px solid transparent';
    }
    selectedColorDiv = purple;
    purple.style.border = '2px solid black';
});

resetButton.addEventListener('click', function () {
    location.reload();
});

colorPicker.addEventListener('input', function () {
    selectedColor = colorPicker.value;
    document.documentElement.style.setProperty('--bubble-color', selectedColor);
});
