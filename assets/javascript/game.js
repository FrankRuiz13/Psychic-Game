var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 10;
var guessedLetters = [];

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice)

// reset function to reset guesses and guessed letters
// function to push letters to guessed letters
document.onkeydown = function (event) {
    var userGuess = event.key;
    console.log(userGuess)
    if (userGuess === computerChoice) {
        wins++;
    }

    else {
        guesses--;
    }

    if (guesses === 0) {
        losses++
    }

document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "losses: " + losses;
document.getElementById("guesses").innerHTML = "guesses: " + guesses;
document.getElementById("guessedLetters").innerHTML = "guessedLetters" + guessedLetters;
}