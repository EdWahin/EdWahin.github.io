const startBtn = document.querySelector('#start'),
      screens = document.querySelectorAll('.screen'),
      timeList = document.querySelector('#time-list'),
      timeElem = document.querySelector('#time'),
      board = document.querySelector('#board'),
      circleColors = ['#A7226E', '#EC2049', '#F26B38', '#F7DB4F', '#2F9599'];
let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
    if(event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');

        startGame();
    }
});

board.addEventListener('click', (event) => {
    if(event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
});

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}

function decreaseTime() {
    if(time === 0) {
        finishGame();
    } else {
        let current = --time;

        if(current < 10) {
            current = `0${current}`;
        }

        setTime(current);
    }
}

function setTime(value) {
    timeElem.innerHTML = `00:${value}`;
}

function finishGame() {
    timeElem.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`;
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.background = getRandomColor();

    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
    return circleColors[Math.floor(Math.random() * circleColors.length)];
}

function winTheGame() {
    function kill() {
        const circle = document.querySelector('.circle');

        if(circle) {
            circle.click();
        }
    }

    setInterval(kill, 10);
}