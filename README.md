# oop_game

## Description

This is a browser-based version of the game: "Phrase Hunter". The game is written in plain JavaScript using OOP (Object-Oriented Programming) to select a random, hidden phrase, which a player tries to guess, by clicking letters either on the game's onscreen keyboard or their physical keyboard.

The game uses two JavaScript classes with specific properties and methods. A Game class for managing the game, and a Phrase class to help with creating an array of Phrase objects.

The program chooses a random phrase, splits it into letters, and puts these on the game-board.

Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the game-board displays the chosen letters on the screen.

The player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears.

A player can guess a letter only once. After they've guessed a letter, the program will disable that letter on the onscreen keyboard.

## Technologies

- JavaScript
- HTML
- CSS
