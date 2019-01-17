
//words to guess
var words = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

//randomly select one of the words from the array
var WordToGuess = words[Math.floor(Math.random() * words.length)];

//get the length of the selected word
var WordLength = WordToGuess.length; 


var WordGuessText = document.getElementById("word");
var LettersGuessedText = document.getElementById("guessedLetters");

//placeholder array before elements to changed
 var fillWord = [WordToGuess];
 var lettersUsed = [];

 //sets selected word to be hidden
 for( i = 0; i < WordLength ; i++)
 {
     fillWord[i] = " _ ";
 }

 //display to screen
 WordGuessText.textContent = fillWord.join(" ");
console.log(WordToGuess);

//gets letter user guess
document.onkeyup = function(event)
{
    //gets key user pressed
    var userGuess = event.key;

            //add letter to guessed letters list.
            lettersUsed.push(userGuess);
            LettersGuessedText.textContent = lettersUsed.join(" ");

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

