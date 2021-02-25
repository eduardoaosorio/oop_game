// Variable to store a new Game instance once the player click 'start game' button
let game = null;

// HTML ELEMENTS

const startGameButton = document.querySelector("#btn__reset");
const keyboardDiv = document.querySelector("#qwerty");

// EVENT LISTENERS

startGameButton.addEventListener("click", () => {
  game = new Game();
  game.startGame();
});

keyboardDiv.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    game.handleInteraction(e.target);
  }
});

window.addEventListener("keydown", (e) => {
  if (game) {
    const keyButtons = keyboardDiv.querySelectorAll("button");
    keyButtons.forEach((button) => {
      if (button.textContent === e.key) game.handleInteraction(button);
    });
  }
});
