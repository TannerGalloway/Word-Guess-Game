
//words to guess
var words = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

//randomly select one of the words from the array
var WordToGuess = words[Math.floor(Math.random() * words.length)];

//get the length of the selected word
var WordLength = WordToGuess.length; 

var amouuntOfGuesses = 20;
var wins = 0;

var amouuntOfGuessesText = document.getElementById("guessesRemaining");
var WordGuessText = document.getElementById("word");
var LettersGuessedText = document.getElementById("guessedLetters");
var winsText = document.getElementById("wins");

//placeholder array before elements to changed
 var fillWord = [WordToGuess];
 var lettersUsed = [];
 var hasdouble = false;

 //sets selected word to be hidden
 for( i = 0; i < WordLength ; i++)
 {
     fillWord[i] = " _ ";
 }

 //display to screen
 WordGuessText.textContent = fillWord.join(" ");
console.log(WordToGuess);
amouuntOfGuessesText.textContent = amouuntOfGuesses;
winsText.textContent = wins;

//gets letter user guess
document.onkeyup = function(event)
{
    //gets key user pressed
    var userGuess = event.key;
    if(amouuntOfGuesses > 0)
    {      
        //check for duplicate letters
    for( var j = 0; j <= lettersUsed.length - 1; j++)
    {
        if(userGuess === lettersUsed[j])
        {
            hasdouble = true;
            break;
        }
        else
        {
            hasdouble = false;
        }
    }
        // if no duplicates add letter to guessed letters list.    
        if(!hasdouble)
        {
            lettersUsed.push(userGuess);
            LettersGuessedText.textContent = lettersUsed.join(" ");
            amouuntOfGuesses--;
            amouuntOfGuessesText.textContent = amouuntOfGuesses;

        }    
            
                //check for correct letter
            for(i = 0; i < WordLength; i++)
            {
                //add letter to hidden word.
                if(userGuess == WordToGuess[i])
                {
                    fillWord[i] = userGuess;
                    WordGuessText.textContent = fillWord.join(" ");
                    
                }
            }
        }
    
}
// need to increment wins and have the game restart when word is solved.
