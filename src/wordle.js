const words = ["pappyhhhhh", "beachf", "apple", "reactpp", "bas",
"angerrrrrrr", "hell", "dress6666666"];
let word;
let wordFieldAr=[];
//const N_LETTERS = 5;
const sectionElement = document.querySelector(".word-guess")
sectionElement.innerHTML = getDivsElements();
const letterElements = document.querySelectorAll(".letter-fromWord");
const trialsElement = document.querySelector(".guess-trials");
const gameOverElement = document.querySelector(".game-over-message");
const playAgainElement = document.getElementById("play-again");

 let flGameOver = true;

let trials = 0;

function getDivsElements() {
   let index = Math.floor(Math.random() * words.length);
   let wordField = words[index];
   console.log(wordField);
   let wordFieldAr = Array.from(wordField);
   console.log(wordFieldAr);
    let res = wordFieldAr.map(letter => `<div class="letter-fromWord">${letter}</div>`);
   

return res.join('');
}
// function showTrialsMessage(trials) {
   
//        trialsElement.innerHTML = 
//        `remained ${trials} guess trials`;
   
  
// }
// function startGame() {
//    letterElements[2].style.background="white"
// }
function onChange(event) {
   let wordGuess = event.target.value.toLowerCase();
   event.target.value = '';

//    if (flGameOver) {
//        alert("game is over");
//        return;
//    }
//    trials++;
//    showTrialsMessage(trials, wordGuess);
   let wordAr = Array.from(wordGuess);
    
        let colors = wordFieldAr.map((l) => {
            return wordAr.includes(l) ? 'white' : 'black';
        })
            
        colors.forEach((c, i) => {
                    letterElements[i].style.background = c;
 })
//    const res = wordGuess == word;
   
    //    endGame(res);

   
}
function endGame(isSuccess) {
   if (isSuccess) {
       gameOverElement.innerHTML =  "Congratulations you are winner";
       gameOverElement.style.color = "green"
   } else {
       gameOverElement.innerHTML =  "Sorry you are loser";
       gameOverElement.style.color = "red"
   }
  
  playAgainElement.style.display='block';
  trialsElement.innerHTML = '';
  flGameOver = true;
}
// startGame()
