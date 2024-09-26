/**
 * A-LAB Browser
 *
 */

// Create random number
function getRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

// Hint if the player does not guess the right number
function hint(guessNum, ranNum) {
  if (guessNum > ranNum) {
    window.alert("Too high. Choose a smaller number.");
  } else {
    window.alert("Too low. Choose a larger number.");
  }
}

// adding dom elements for view
const bodyEl = document.body;
bodyEl.style.display = "flex";
bodyEl.style.justifyContent = "center";
bodyEl.style.alignItems = "center";
const h1El = document.createElement("h1");
h1El.textContent = "Guessing Game";
bodyEl.appendChild(h1El);
const h2El = document.createElement("h2");

// game variables
const randomNumber = getRandomNumber();
let turns = 0;
const maxTurns = 3;
console.log(randomNumber);

do {
  let input = window.prompt("Enter a number between 1 to 20");
  console.log(input);

  turns++;

  // logic to determine win/lose situation
  if (input === randomNumber) {
    window.alert(`You won. The number", ${randomNumber}`);
    bodyEl.style.backgroundColor = "green";
    h2El.textContent = "You Win";
    bodyEl.appendChild(h2El);
    break;
  } else {
    hint(input, randomNumber);
  }

  if (turns === 3) {
    window.alert(`You lose. The number is ${randomNumber}`);
    bodyEl.style.backgroundColor = "red";
    h2El.textContent = "You Lose";
    bodyEl.appendChild(h2El);
  }
} while (turns < maxTurns);
