const grid = document.querySelector(".grid");
const start = document.getElementById("start");
const score = document.getElementById("score");
let squares = [];
let currentSnake = [2,1,0];
let direction = 1;

function createGrid() {
    for(let i=0; i < 100; i++) {
        const square = document.createElement("div");
        //add class
        square.classList.add("square");
        //Append to existing Div
        grid.appendChild(square);
        //push sqaure into squares
        squares.push(square)

    }
}
createGrid();

currentSnake.forEach(index => squares[index].classList.add("snake"));

function move() {
    const tail = currentSnake.pop();
    console.log(tail);
    console.log(currentSnake);

    squares[tail].classList.remove("snake");

    currentSnake.unshift(currentSnake[0] + direction)
    console.log(currentSnake)
    squares[currentSnake[0]].classList.add("snake")
}

move();