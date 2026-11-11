let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let player1Score = 0;
let player2Score = 0;
let resetButton = document.getElementById("reset-btn");
let playingfield = document.getElementById("playingField");
let condition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let board = ["", "", "", "", "", "", "", "", ""];

function checkWinner() {
    for (let i = 0; i<board.length; i++) {
    }
}
