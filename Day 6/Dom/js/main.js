console.log('test connection');
// 10 pixels - 200 pixels

const div = document.querySelector('#container');

function createCircle(x, y) {
    const diameter = Math.floor(Math.random() * 190 + 11);
    const opacity = Math.floor(Math.random() * 100 + 1);
    console.log(opacity);
    const circleDiv = document.createElement('div');
    circleDiv.className = 'circle';
    circleDiv.style.left = x + 'px';
    circleDiv.style.top = y + 'px';
    circleDiv.style.width = diameter + 'px';
    circleDiv.style.height = diameter + 'px';
    circleDiv.style.opacity = opacity + '%';
    div.appendChild(circleDiv);
}

document.addEventListener('click', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    createCircle(x, y);
});
