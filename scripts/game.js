
function cellClick(event) {
    function winCheck() {
        console.log("winCheck works");
        if (gameArray[0] === gameArray[1] && gameArray[0] === gameArray[2] && gameArray[0] !== 0) {
            gameIsDone = true;
            if (isTurnX == true) {
                winner.textContent = playerXName.textContent + " WIN";
            } else {
                winner.textContent = playerOName.textContent + " WIN";
            }
            resultBunner.style.display = "block";
        } else if (gameArray[0] === gameArray[4] && gameArray[0] === gameArray[8] && gameArray[0] !== 0) {
            gameIsDone = true;
            if (isTurnX == true) {
                winner.textContent = playerXName.textContent + " WIN";
            } else {
                winner.textContent = playerOName.textContent + " WIN";
            }
            resultBunner.style.display = "block";
        } else if (gameArray[0] === gameArray[3] && gameArray[0] === gameArray[6] && gameArray[0] !== 0) {
            gameIsDone = true;
            if (isTurnX == true) {
                winner.textContent = playerXName.textContent + " WIN";
            } else {
                winner.textContent = playerOName.textContent + " WIN";
            }
            resultBunner.style.display = "block";
        } else if (gameArray[1] === gameArray[4] && gameArray[1] === gameArray[7] && gameArray[1] !== 0) {
            gameIsDone = true;
            if (isTurnX == true) {
                winner.textContent = playerXName.textContent + " WIN";
            } else {
                winner.textContent = playerOName.textContent + " WIN";
            }
            resultBunner.style.display = "block";
        } else if (gameArray[2] === gameArray[5] && gameArray[2] === gameArray[8] && gameArray[2] !== 0) {
            gameIsDone = true;
            if (isTurnX == true) {
                winner.textContent = playerXName.textContent + " WIN";
            } else {
                winner.textContent = playerOName.textContent + " WIN";
            }
            resultBunner.style.display = "block";
        } else if (gameArray[2] === gameArray[4] && gameArray[2] === gameArray[6] && gameArray[2] !== 0) {
            gameIsDone = true;
            if (isTurnX == true) {
                winner.textContent = playerXName.textContent + " WIN";
            } else {
                winner.textContent = playerOName.textContent + " WIN";
            }
            resultBunner.style.display = "block";
        } else if (gameArray[3] === gameArray[4] && gameArray[3] === gameArray[5] && gameArray[3] !== 0) {
            gameIsDone = true;
            if (isTurnX == true) {
                winner.textContent = playerXName.textContent + " WIN";
            } else {
                winner.textContent = playerOName.textContent + " WIN";
            }
            resultBunner.style.display = "block";
        } else if (gameArray[6] === gameArray[7] && gameArray[6] === gameArray[8] && gameArray[6] !== 0) {
            gameIsDone = true;
            if (isTurnX == true) {
                winner.textContent = playerXName.textContent + " WIN";
            } else {
                winner.textContent = playerOName.textContent + " WIN";
            }
            resultBunner.style.display = "block";
        } else if (gameArray[0] !== 0 && gameArray[1] != 0 && gameArray[2] != 0 && gameArray[3] != 0 && gameArray[4] != 0 && gameArray[5] != 0 && gameArray[6] != 0 && gameArray[7] != 0 && gameArray[8] != 0) {
            gameIsDone = true;
            winner.textContent = "Draw";
            resultBunner.style.display = "block";
        }
    }

    if(gameArray[event.target.children[0].textContent] > 0){
        return;
    }

    if (isTurnX == true) {
        gameArray[event.target.children[0].textContent] = 1;
        event.target.children[0].textContent = "X";
        turnPlayerSpan.textContent = playerOName.textContent;
        console.log(gameArray);
        winCheck();
    } else {
        gameArray[event.target.children[0].textContent] = 2;
        event.target.children[0].textContent = "O";
        turnPlayerSpan.textContent = playerXName.textContent;
        console.log(gameArray);
        winCheck();
    }

    event.target.classList.add("clicked-cell");
    event.target.children[0].style.display = "block";
    if (gameIsDone === true) {
        gameBlocker.style.zIndex = 1;
    }
    isTurnX = !isTurnX;

}


