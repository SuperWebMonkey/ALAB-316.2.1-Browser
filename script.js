/**
 * A-LAB Browser
 *
 */

function getRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

const bodyEl = document.body;

const randomNumber = getRandomNumber();
console.log(randomNumber);

let input = window.prompt("Enter a number between 1 to 20");
console.log(input);

if (randomNumber === input) {
  window.alert(`You won. The number", ${randomNumber}`);
  bodyEl.style.backgroundColor = "red";
} else {
  window.alert(`You lose. The number is ${randomNumber}`);
  bodyEl.style.backgroundColor = "green";
}
