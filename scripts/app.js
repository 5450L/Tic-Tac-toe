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