/**
 * A-LAB Browser
 *
 */

// Create random number
function getRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

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

// random number and input
const randomNumber = getRandomNumber();
console.log(randomNumber);

let input = window.prompt("Enter a number between 1 to 20");
console.log(input);

// logic to determine win/lose situation
if (input === randomNumber) {
  window.alert(`You won. The number", ${randomNumber}`);
  bodyEl.style.backgroundColor = "green";
} else {
  hint(input, randomNumber);
  window.alert(`You lose. The number is ${randomNumber}`);
  bodyEl.style.backgroundColor = "red";
}
