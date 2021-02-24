class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("Winter is Coming"),
      new Phrase("Ours is the Fury"),
      new Phrase("We Do Not Sow"),
      new Phrase("Hear Me Roar"),
      new Phrase("Growing Strong"),
    ];
    this.activePhrase = null;
  }

  /**
   * Resets game settings to those of a new game, selects a random phrase and displays it to user
   */
  startGame() {
    document.querySelector("#overlay").style.display = "none";
    document.querySelector("#phrase>ul").innerHTML = "";
    document.querySelectorAll("#scoreboard li img").forEach((img) => {
      img.src = "images/liveHeart.png";
    });
    document.querySelectorAll("#qwerty button").forEach((button) => {
      button.className = "key";
      button.disabled = false;
    });
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }

  /**
   * Handles onscreen keyboard button clicks
   * @param {object} button - The clicked HTMLButtonElement
   */
  handleInteraction(button) {
    if (!button.disabled) {
      button.disabled = true;
      if (this.activePhrase.checkLetter(button.textContent)) {
        button.classList.add("chosen");
        this.activePhrase.showMatchedLetter(button.textContent);
        if (this.checkForWin()) this.gameOver(true);
      } else {
        button.classList.add("wrong");
        this.removeLife();
      }
    }
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    this.missed++;
    const heartImgs = document.querySelectorAll("#scoreboard li img");
    for (let i = 0; i < this.missed; i++) {
      heartImgs[i].src = "images/lostHeart.png";
    }
    if (this.missed === 5) this.gameOver(false);
  }

  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game hasn't been won yet
   */
  checkForWin() {
    const letterLis = Array.from(
      document.querySelectorAll("#phrase li.letter")
    );
    return letterLis.every((li) => li.classList.contains("show"));
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const overlayDiv = document.querySelector("#overlay");
    overlayDiv.style.display = "inherit";
    if (gameWon) {
      overlayDiv.querySelector("h1").textContent = "You Win!";
      overlayDiv.className = "win";
    } else {
      overlayDiv.querySelector("h1").textContent = "You Lost!";
      overlayDiv.className = "lose";
    }
  }
}
