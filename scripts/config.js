function showLoginSectionX() {
    playerLoginSection.style.display = "block";
    isPlayerX = true;
}
function showLoginSectionO() {
    let playerLoginSection = document.getElementById("player-login");
    playerLoginSection.style.display = "block";
    isPlayerX = false;
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