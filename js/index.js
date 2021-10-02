const grid = document.querySelector('.grid');
const start = document.getElementById('start');
const score = document.getElementById('score');
let squares = [];
let currentSnake = [2,1,0];
let direction = 1;
let width = 10;
let appleIndex = 0;

function createGrid() {
    for(let i=0; i < 100; i++) {
        const square = document.createElement('div');
        //add class
        square.classList.add('square');
        //Append to existing Div
        grid.appendChild(square);
        //push sqaure into squares
        squares.push(square)

    }
}
createGrid();

currentSnake.forEach(index => squares[index].classList.add('snake'));
let timerId = setInterval(move, 1000);
function move() {

if(
 (currentSnake[0] +width >= 100 && direction === 100) ||
 (currentSnake[0] % width === 9 && direction === 1) ||
 (currentSnake[0] % width === 0 && direction === -1) ||
 (currentSnake[0] - width < 0 && direction === -10) ||
 squares[currentSnake[0]].classList.contains('snake')
)
return clearInterval(timerId);

    const tail = currentSnake.pop();

    squares[tail].classList.remove('snake');

    currentSnake.unshift(currentSnake[0] + direction)

    squares[currentSnake[0]].classList.add('snake');
}

move();
let timerFunction = timerId;
// let timerId = setInterval(move, 1000);
// return clearInterval(timerId);
function generateApple() {
    do {
        appleIndex = Math.floor(Math.random() * squares.length )
    } while(squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
}
generateApple()




function control(e) {
    if (e.keyCode === 39) {
        direction = 1
    } else if (e.keyCode === 38) {
        direction = -width;
    } else if(e.keyCode === 37) {
        direction = -1
    } else {
        direction = +width;
    }
}