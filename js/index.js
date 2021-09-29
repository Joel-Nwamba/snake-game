const grid = document.querySelector(".grid");
const start = document.getElementById("start");
const score = document.getElementById("score");
let squares = [];
let currentSnake = [0,1,2];

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
    
}