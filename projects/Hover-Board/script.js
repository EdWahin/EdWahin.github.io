const board = document.querySelector('#board'),
      colors = ['#ff1d58', '#f75990', '#fff685', '#00DDFF', '#0049B7'];
const SQUARES_NUMBER = 400;

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');

    square.classList.add('square');

    square.addEventListener('mouseover', setColor);

    square.addEventListener('mouseleave', removeColor);

    board.append(square);
}

function setColor(event) {
    const element = event.target;
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 20px ${color}`;
}

function removeColor(event) {
    const element = event.target;
    element.style.background = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}