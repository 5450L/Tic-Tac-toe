function showLoginSectionX() {
    gameArea.style.display = "none";
    resultBunner.style.display = "none";
    playerLoginSection.style.display = "block";
    isPlayerX = true;
}
function showLoginSectionO() {
    let playerLoginSection = document.getElementById("player-login");
    playerLoginSection.style.display = "block";
    isPlayerX = false;
}
function cancelLogin() {
    playerLoginSection.style.display = "none";
}
function confirmLogin(event) {
    event.preventDefault();
    let enteredName = playerNameInput.value.toLowerCase();
    enteredName = enteredName.charAt(0).toUpperCase() + enteredName.substring(1);

    if (isPlayerX == true) {
        playerXName.textContent = enteredName;
    } else {
        playerOName.textContent = enteredName;
    }
    playerLoginSection.style.display = "none";
    playerNameInput.value = "";
}

function startGame(event) {
    event.preventDefault();

    gameBlocker.style.zIndex = -1;
    gameIsDone = false;
    gameArray = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ]
    resultBunner.style.display = "none";
    for (let i = 0; i < gameCells.length; i++) {
        gameCells[i].classList.remove("clicked-cell");
        gameCellsContent[i].style.display = "none";
        gameCellsContent[i].textContent = i;
    }
    gameArea.style.display = "block";
    turnPlayerSpan.textContent = playerXName.textContent;

    isTurnX = true;
}

