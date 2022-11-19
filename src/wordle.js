
const words = [
    ['close relative', 'pappy'],
    ['fruit', 'apple'],
    ['picture','photo'],
    ['programming language', 'java'],
    ['furniture', 'chair']];

let word;
let index = 0;
let prevInd = -1;
let wordFieldAr = [];
let wordFieldArLen = 0;
const sectionElement = document.querySelector(".word-guess");
sectionElement.innerHTML = getDivsElements();
const letterElements = document.querySelectorAll(".letter-fromWord");
const trialsElement = document.querySelector(".guess-trials");
const gameOverElement = document.querySelector(".game-over-message");
const invitationElement = document.querySelector(".guess-invitation");
const playAgainElement = document.getElementById("play-again");

let flGameOver = false;
let trials = 0;

function getDivsElements() {
    index = getIndex();
    console.log('word=', words[index][1]);
    word = words[index][1];
    wordFieldAr = Array.from(word);
    let res = wordFieldAr.map(letter => `<div class="letter-fromWord">${letter}</div>`);
    return res.join('');
}

function getIndex() {
    index = Math.floor(Math.random() * words.length); 
    while(index == prevInd) {
        index = Math.floor(Math.random() * words.length);  
    }
    prevInd = index;
    return index;
}

function showTrialMessage(trials, word) {    
    trialsElement.innerHTML = `You have done ${trials} guess trials! Your word is ${word}`;  
    // wordTrialsElement.innerHTML = `Your word is ${word}`;
}

function startGame() {
    if(flGameOver) {
        sectionElement.innerHTML = getDivsElements();
        flGameOver = false;
    }
    trials = 0;
    wordFieldArLen = 0;
    flGameOver = false;
    gameOverElement.innerHTML =  "";
    invitationElement.innerHTML = `Guess the word as "${words[index][0]}"`;
}
function onChange(event) {
    let wordGuess = event.target.value.toLowerCase();
    event.target.value = '';
    if (flGameOver) {
        alert("game is over");
        return;
    }
    trials++;
    showTrialMessage(trials, wordGuess);
    const wordAr = Array.from(wordGuess);
    let colors = wordFieldAr.map((l) => {
        return wordAr.includes(l) ? 'white' : 'black';
    })
    colors.forEach((color, index) => {
        if(color === 'white') {
            if(letterElements[index].style.background !== 'white') {
                wordFieldArLen++;
                letterElements[index].style.background = color;
            }
        }
    });
    if(wordFieldArLen === wordFieldAr.length) {
        endGame(true);
    }
}
function endGame(isSuccess) {
    if (isSuccess) {
        gameOverElement.innerHTML =  `Congratulations you are winner, the game is over.
        Amount of trials is ${trials}`;
        gameOverElement.style.color = "green"
        invitationElement.innerHTML = '';
    }
   
playAgainElement.style.display='block';
trialsElement.innerHTML = '';
flGameOver = true;
    index = 0;
    prevInd = -1;
    
}
startGame();