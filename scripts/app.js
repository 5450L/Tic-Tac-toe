// Choose Player Name
let playerXName = document.querySelector("#player-x h2");
let playerOName = document.querySelector("#player-o h2");

let playerNameInput = document.querySelector(".input-area input");
let playerLoginSection = document.getElementById("player-login");

let editNameBtn = document.querySelectorAll(".player span");
let isPlayerX = true;
editNameBtn[0].addEventListener("click", showLoginSectionX);
editNameBtn[1].addEventListener("click", showLoginSectionO);

let confirmButton = document.getElementById("confirm-button");
confirmButton.addEventListener("click", confirmLogin);

let cancelButton = document.getElementById("cancel-button");
let backDrop = document.getElementById("back-drop");
cancelButton.addEventListener("click", cancelLogin);
backDrop.addEventListener("click", cancelLogin);

let gameArray = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
]
let startGameButton = document.getElementById("start-button");
let gameArea = document.getElementById("game-and-turn-counter");
startGameButton.addEventListener("click", startGame);

let isTurnX = true;
let turnPlayerSpan = document.getElementById("player-turn");

let gameCells = document.querySelectorAll(".cell");
let gameCellsContent = document.querySelectorAll(".cell-content");

for(let i = 0; i < gameCells.length; i++){
    gameCells[i].addEventListener("click", cellClick);
}

let gameIsDone = false;
let gameBlocker = document.getElementById("game-is-done");
let resultBunner = document.getElementById("result-bunner");
let winner = document.getElementById("winner");