const result = document.getElementById("result");
const playerChoices = document.querySelectorAll(".player-choices");
const compScore = document.getElementById("computer-score");
const userScore = document.getElementById("player-score");
const displayUserChoice = document.getElementById("player-choice");
const displayCompChoice = document.getElementById("computer-choice");

const choiceEmoji = {
  rock: "👊",
  paper: "🖐️",
  scissor: "✌️",
};

let userPoints = 0;
let compPoints = 0;

// get random computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}
// get player choice
playerChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    playGame(choice.id);
  });
});

// game logic
function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  round(userChoice, computerChoice);
  displayChoices(userChoice, computerChoice);
  decideWinner(userPoints, compPoints);
}

// deciding winner for each round
function round(userChoice, compChoice) {
  if (userChoice === compChoice) {
    result.style.color = "black";
    result.textContent = `It's A Tie!`;
  } else if (
    (userChoice === "rock" && compChoice === "scissor") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissor" && compChoice === "paper")
  ) {
    userPoints++;
    userScore.textContent = `Player : ${userPoints}`;
    result.style.color = "green";
    result.textContent = `You Win! ${choiceEmoji[userChoice]} beats ${choiceEmoji[compChoice]}`;
  } else {
    compPoints++;
    compScore.textContent = `Computer : ${compPoints}`;
    result.style.color = "red";
    result.textContent = `You Lose ! ${choiceEmoji[compChoice]} beats ${choiceEmoji[userChoice]}`;
  }
}

// changing display choices on ui
function displayChoices(userChoice, compChoice) {
  displayUserChoice.setAttribute("src", `./assets/${userChoice}.png`);
  displayCompChoice.setAttribute("src", `./assets/${compChoice}.png`);
}

// decide game winner based on highest points
function decideWinner(playerScore, computerScore) {
  if (playerScore === 5) {
    alert(`
    You Won!
    Your Score : ${userPoints}
    Computer Score : ${compPoints}`);
    window.location.reload();
  }
  if (computerScore === 5) {
    alert(`
    You Lost!
    Your Score : ${userPoints}
    Computer Score : ${compPoints}`);
    window.location.reload();
  }
}
