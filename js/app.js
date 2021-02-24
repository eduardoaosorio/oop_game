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

/* Extra Credit

1) Add keyboard functionality:

    - Let players use their physical computer keyboard to enter guesses. You'll need to use 
    the keydown or keyup event.

2) Making the project your own:

    - The general layout should remain the same, but feel free to make the project your own 
    by experimenting with things like color, background color, font, borders, shadows, 
    transitions, animations, filters, etc.
    
    - Detail your style changes in your README.md file and in your submission notes.*/
