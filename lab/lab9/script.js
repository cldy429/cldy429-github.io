// Асуулт хариулт
const questions = [
    { question: "A fruit that keeps the doctor away", answer: "apple" },
    { question: "A yellow curved fruit", answer: "banana" },
    { question: "A red fruit often associated with love", answer: "cherry" },
    { question: "A green or purple fruit in clusters", answer: "grape" }
];

const keyboardDiv = document.querySelector(".letters");
const word = document.querySelector(".word");

const getRandomWord = () => {
    const { question, answer } = questions[Math.floor(Math.random() * questions.length)];
    console.log(answer);
    document.querySelector(".question b").innerText = question;
    word.innerHTML = answer.split("").map(() => '<li class="letter"></li>').join("");
}

const initGame = (button, clickedLetter) => {
    console.log(button, clickedLetter);
}

for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText =  String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)))
}

getRandomWord();