// Асуулт хариулт
const questions = [
    { question: "A fruit that keeps the doctor away", answer: "apple" },
    { question: "A yellow curved fruit", answer: "banana" },
    { question: "A red fruit often associated with love", answer: "cherry" },
    { question: "A green or purple fruit in clusters", answer: "grape" }
];

const keyboardDiv = document.querySelector(".letters");
const word = document.querySelector(".word");
const lives = document.querySelector(".lives");
const manImage = document.querySelector(".box img");
const win = document.querySelector(".gameover");
const playBtn = document.querySelector(".play-again");

let randomAnswer, correct = [], live = 5;
const minWrong = 0;

const playAgain = () => {
    correct = [];
    live = 5;
    manImage.src = `content/hangman-${live}.svg`;
    lives.innerText = `${live}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    word.innerHTML = randomAnswer.split("").map(() => '<li class="letter"></li>').join("");
    win.classList.remove("show");
}

const getRandomWord = () => {
    const { question, answer } = questions[Math.floor(Math.random() * questions.length)];
    randomAnswer = answer;
    console.log(answer);
    document.querySelector(".question b").innerText = question;
    playAgain();
    
}

const gameOver = (isVictory) => {
    const winText = isVictory ? `You found the word:` : `The correct word was:`;
    win.querySelector("img").src =`content/${isVictory ? 'won': 'game-over'}.png`;
    win.querySelector("h4").innerText = `${isVictory ? 'Congrats!': 'Game over!'}`;
    win.querySelector("p").innerHTML =`${winText} <b>${randomAnswer}</b>`;
    win.classList.add("show");
    console.log(isVictory);
}

const initGame = (button, clicked) => {
    if(randomAnswer.includes(clicked)) {
        // Зөв таасан үсгийг харуулах
        [...randomAnswer].forEach((letter, index) => {
        if(letter === clicked) {
            correct.push(letter);
            word.querySelectorAll("li")[index].innerText = letter;
            word.querySelectorAll("li")[index].classList.add("guessed");
        }
       })
    } else {
        live--;
        manImage.src = `content/hangman-${live}.svg`;
    }
    button.disabled = true;
    lives.innerText = `${live}`;

    if(live === 0) return gameOver(false);
    if(correct.length === randomAnswer.length) return gameOver(true);
}

for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText =  String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)))
}

getRandomWord();
playBtn.addEventListener("click", getRandomWord);