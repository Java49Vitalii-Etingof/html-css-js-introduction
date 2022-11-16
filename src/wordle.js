const words = ['table', 'chair', 'apple', 'melon', 'guest', 'photo'];
const gameResultField = document.querySelector('.game-result');
const currentAttemptField =document.querySelector('.current-attempt');
const letterElements = document.querySelectorAll(".letter-guess");
const N_LETTERS = 5;
const N_ATTEMPTS = 6; 
let currentAttempt = 0;

function onChange(event) {
    const wordGuess = event.target.value.toLowerCase();
    currentAttemptField.innerHTML = 'Remaining attempts: ' + (N_ATTEMPTS -currentAttempt++ );
    event.target.value='';
    if (wordGuess.length != N_LETTERS) {
        alert(`A word should contain ${N_LETTERS} letters`)
    } else {
        const wordAr = Array.from(wordGuess);
        wordAr.forEach((l, i) => letterElements[i].innerHTML = l)
        const colors = wordAr.map((l, i) => {
            let index = word.indexOf(l);
            let res = 'red';
            if (index  > -1) {
                res = l == word.charAt(i) ? 'green' : 'yellow';
            }
            return res;
        })
        colors.forEach((c, i) =>
         letterElements[i].style.color=c)
    }
   
}
function getWord() {
    return words[getRandomIntegerValue(0, words.length)];
}
function getRandomIntegerValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}