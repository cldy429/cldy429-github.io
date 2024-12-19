let powerOn = false;
// Random-р өгөгдөх дараалал
const sequence = [];
// Хэрэглэгчийн оруулсан дараалал
let userSequence = [];
let level = 1;

const levelCount = document.querySelector('.level-count');

function togglePower() {
    powerOn = !powerOn;
    if (powerOn) {
        startGame();
        enableButtons();
        document.getElementById("start-btn")
        .disabled = false;
    } else {
        userSequence = [];
        disableButtons();
        document.getElementById("start-btn")
        .disabled = true;
    }
}

    function startGame() {
        sequence.length = 0;
        userSequence.length = 0;
        level = 1;
        levelCount.textContent = level;
        nextRound();
        document.getElementById("power-btn").disabled = false;
    }

  
//   Энэ хэсэг random-р sequence нэмээд түүнийг хэрэглэгчид харуулж байгаа.
//   Дууссаны дараа button-уудыг enable болгоно


    function nextRound() {
        addToSequence();
        playSequence();
    }

        function addToSequence() {
            const randomColor = Math.floor(Math.random() * 4) + 1;
            sequence.push(randomColor);
        }

        function playSequence() {
            let i = 0;
            const intervalId = setInterval(() => {
                highlightButton(sequence[i]);
                i++;
                if (i >= sequence.length) {
                    clearInterval(intervalId);
                    enableButtons();
                }
            }, 1000);
        }

            function highlightButton(color) {
                const button = document
                .querySelector(`[data-color="${color}"]`);
                if (Number(color) == 1) {
                    button.style.backgroundColor = 'lightgreen'
                }
                else if (Number(color) == 2) {
                    button.style.backgroundColor = 'tomato'
                }
                else if (Number(color) == 3) {
                    button.style.backgroundColor = 'yellow'
                }
                else if (Number(color) == 4) {
                    button.style.backgroundColor = 'lightskyblue'
                }
                setTimeout(() => {
                    button.attributes.removeNamedItem('style');
                }, 300);
            }

            function enableButtons() {
                const buttons = document
                .querySelectorAll('.simon-btn');
                buttons.forEach(button => 
                button.removeAttribute('disabled'));
            }
        
// Button дарах үед ажиллах функц

function handleClick(button) {
    if (powerOn) {
        // Button дарангууд 1-4 хооронд тоо авна.
        const userColor = button.getAttribute("data-color");
        // Тоглогчийн дарсан тоог оруулна.
        userSequence.push(Number(userColor));
        highlightButton(userColor);
        
        if (!checkSequence()) {
            alert(`Game over! Press Start to retry from level 1.\nFINAL SCORE: ${level}`);
                togglePower();
                startGame();
        } else if (userSequence.length === sequence.length) {
            userSequence = [];
            level++;
            levelCount.textContent = level;
            setTimeout(() => nextRound(), 500);
        }
    }
}

    function checkSequence() {
        for (let i = 0; i < userSequence.length; i++) {
            if (userSequence[i] !== sequence[i]) {
                return false;
            }
        }
        return true;
    }

function disableButtons() {
    const buttons = document
    .querySelectorAll('.simon-btn');
    buttons.forEach(button => 
    button.setAttribute('disabled', 'true'));
}

