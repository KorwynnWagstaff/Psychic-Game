// Declares the possible choices the computer can pick from
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Declares all vars to zero
var wins = 0;
var losses = 0;
var guesses = 13;
var guessesLeft = 13;
var guessedLetters = [];
var letterToGuess = null;

// Declares the computer's choice by random
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Updates the player's remaining guesses
var updateGuessesLeft = function() {
  // Grabs, declares, and updates how many guesses the player has left
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var changeLetterToGuess = function() {
  // Changes the computer's letter choice whenever the game is reset
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
  // Grabs, declares, and updates the player's past guesses
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Runs whenever reset is called
var reset = function() {
  totalGuesses = 13;
  guessesLeft = 13;
  guessedLetters = [];
  changeLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

changeLetterToGuess();
updateGuessesLeft();
console.log(letterToGuess);
// Player's guess is declared by which key is pressed
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

  if (guessesLeft > 0){
    if (userGuess == letterToGuess){
      wins++;
      document.querySelector('#wins').innerHTML = "Wins: " + wins;
      alert("You won! Looks like you're psychic!!");
      reset();
      }
    }else if(guessesLeft == 0){
      // When this runs, it will keep a running total of how many losses the player currently has
      losses++;
      document.querySelector('#losses').innerHTML = "Losses: " + losses;
      alert("Seems like you're not psychic, you lost. Try again");
      // Reset is then called to reset the game
      reset();
      }
};