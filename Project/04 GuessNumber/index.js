let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);
const userInput = document.getElementById("guessField");
const submit = document.querySelector(".guessSubmit");
const slotGuess = document.querySelector(".guesses");
const remainGuess = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const gameStart = document.getElementById("gameStart");

let prevGuess = [];
let numberOfGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const userValue = parseInt(userInput.value);
        console.log("hello");
        validationGuess(userValue);
    });
}

function validationGuess(userValue) {
    //*checking userValue is not a string or NaN ..

    if (isNaN(userValue)) {
        alert(`Please Enter the Valid number`);
    } else if (userValue > 100) {
        alert(`Please Enter the Valid number`);
    } else if (userValue < 0) {
        alert(`Please Enter the Valid number`);
    } else {
        prevGuess.push(userValue);
        if (numberOfGuess === 11) {
            messageDisplay(`Game is Over 😔 ! Random number was ${randomNumber}`);

            endGame();
        } else {
            displayGuess(userValue);
            checkGuess(userValue);
        }
    }
}

function displayGuess(userValue) {
    userInput.value = "";
    slotGuess.textContent += `${userValue}, `;
    numberOfGuess++;
    remainGuess.textContent = `${11 - numberOfGuess}`;
}

function checkGuess(userValue) {
    if (userValue === randomNumber) {
        messageDisplay(`your gussed it right 👏🥳`);
        endGame();
    } else if (userValue < randomNumber) {
        messageDisplay("your gussing too low ");
    } else if (userValue > randomNumber) {
        messageDisplay("your gussing too High");
    }
}

function messageDisplay(message) {
    lowOrHi.textContent = `${message}`;
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    gameStart.classList.remove("hide");
    playGame = false;
    startGame();
}

function startGame() {
    gameStart.addEventListener("click", () => {
        randomNumber = Math.floor(Math.random() * 100 + 1);
        userInput.removeAttribute("disabled");
        gameStart.classList.add("hide");
        numberOfGuess = 1;
        remainGuess.textContent = `${11 - numberOfGuess}`;
        lowOrHi.textContent = "";
        prevGuess = [];
        slotGuess.textContent = "";
        playGame = true;
    });
}