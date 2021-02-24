class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Displays phrase on game board
   */
  addPhraseToDisplay() {
    const phraseUl = document.querySelector("#phrase>ul");
    for (let letter of this.phrase) {
      if (letter === " ") {
        phraseUl.innerHTML += `<li class="space"> </li>`;
      } else {
        phraseUl.innerHTML += `<li class="hide letter ${letter}">${letter}</li>`;
      }
    }
  }

  /**
   * Checks if passed letter is in phrase
   * @param {string} letter - Letter to check
   * @return {boolean} True if phrase includes letter, else false
   */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param {string} letter - Letter to display
   */
  showMatchedLetter(letter) {
    const letterLis = document.querySelectorAll("#phrase li.letter");
    for (let letterLi of letterLis) {
      if (letterLi.textContent === letter) {
        letterLi.classList.remove("hide");
        letterLi.classList.add("show");
      }
    }
  }
}
