
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let player1Score = 0;
let player2Score = 0;
let drawScore = 0;
let player1ScoreText = document.getElementById("player1Score");
let player2ScoreText = document.getElementById("player2Score");
let drawScoreText = document.getElementById("score");
let boxes = document.querySelectorAll(".box");
let currentPlayer = "X";
let resetButton = document.getElementById("reset-btn");
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
player1ScoreText.textContent = player1Score;
player2ScoreText.textContent = player2Score;
drawScoreText.textContent = drawScore;

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function() {

        if (board[i] === "") {
            board[i] = currentPlayer;
            boxes[i].textContent = currentPlayer;

            if (checkWinner() === true) {

                if (currentPlayer === "X") {
                    player1Score++;
                    player1ScoreText.textContent = player1Score;
                    alert("Player 1 Wins!");
                }
                else {
                    player2Score++;
                    player2ScoreText.textContent = player2Score;
                    alert("Player 2 Wins!");
                }
                resetBoard();
                return;
            }
            if (checkDraw() === true) {
                drawScore++;
                drawScoreText.textContent = drawScore;
                alert("It's a Draw!");
                resetBoard();
                return;
            }
            if (currentPlayer === "X") {
                currentPlayer = "O";
            }
            else {
                currentPlayer = "X";
            }
        }
    })
}

function checkWinner() {
    for (let i = 0; i < condition.length; i++) {
        let combination = condition[i];
        let a = combination[0]
        let b = combination[1]
        let c = combination[2]
        if (board[a] === board[b] && board[b] === board[c] && board[a] !== "") {
            return true
        }
    }
    return false
}

function checkDraw() {
    for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
            return false
        }
    }
    return true
}

function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].textContent = "";
    }
    currentPlayer = "X";
}

resetButton.addEventListener("click", function() {
    resetBoard();
});