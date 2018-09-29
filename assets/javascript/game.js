var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedSoFar = [];

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess + " user guess ")
    var userGuess = event.key.toLowerCase()
   
    

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log(computerGuess + " computer choice ")
    

    if (event.keyCode >= 65 && event.keyCode <= 90){
    

    if (userGuess === computerGuess) {
        wins++ ; 
        guessesLeft = 9;
        guessedSoFar = [];
        alert(" You Won !!! ")

    }
    
    
    
     if (userGuess !== computerGuess) {
        guessesLeft--;
        guessedSoFar.push(userGuess);
    
    }

    if (guessesLeft == 0) {
            alert("You lose!");
            guessesLeft = 9;
            guessedSoFar = [];
            losses++;
        }
    
    }

document.getElementById("wins-text").textContent = "Wins : " + wins;
document.getElementById("losses-text").textContent = "Lost : " + losses;
document.getElementById("guessesLeft-text").textContent = "Guesses Left : " + guessesLeft;
document.getElementById("guessedSoFar-text").textContent = "Guessed So Far : " + guessedSoFar;

}
