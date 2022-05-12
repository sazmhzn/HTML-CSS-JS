const computerChoiceDisplay = document.querySelector("#computer-choice");
const userChoiceDisplay = document.querySelector("#user-choice");
const resultDisplay = document.querySelector("#result");

const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possible) =>
  possible.addEventListener("click", (e) => {
    userChoice = e.target.id;
    console.log(userChoice);
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  console.log(randomNumber);
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "sissor";
  }

  if ((randomNumber === 3)) {
    computerChoice = "paper";
  }

  console.log(computerChoice);

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice == userChoice) {
    result = "its a draw!";
  }

  if (computerChoice === "rock" && userChoice === "paper") {
    result = "you win!";
  }
  if (computerChoice === "rock" && userChoice === "sissor") {
    result = "you lose!";
  }
  if (computerChoice === "paper" && userChoice === "sissor") {
    result = "you win!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "you lose!";
  }
  if (computerChoice === "sissor" && userChoice === "rock") {
    result = "you win!";
  }
  if (computerChoice === "sissor" && userChoice === "paper") {
    result = "you lose!";
  }

  resultDisplay.innerHTML = result;
}
