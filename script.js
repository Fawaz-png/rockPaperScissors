const getComputerChoice = () => {
    const choice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random].toLowerCase();
}

const playRound = (playerSelection, computerSelection) => {
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win, ${playerSelection} beats ${computerSelection}`;
    } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")
    ) {
        return `Computer wins, ${computerSelection} beats ${playerSelection}`;
    } else {
        return `It's a tie, ${computerSelection} ties ${playerSelection}`;
    }
}

let playerScore = 0;
let computerScore = 0;

for (let i = 1; i <= 5; i++) {
    const computer = getComputerChoice();
    let player;
    do {
        player = prompt('Make your choice: Rock, Paper, or Scissors').toLowerCase();
        if (!["rock", "paper", "scissors"].includes(player)) {
            alert("Invalid choice. Please choose Rock, Paper, or Scissors.");
        }
    } while (!["rock", "paper", "scissors"].includes(player));


    const roundResult = playRound(player, computer);
    console.log(`Round ${i}: ${roundResult} \n`);

    if (roundResult.includes("You win")) {
        playerScore++;
    } else if (roundResult.includes("Computer wins")) {
        computerScore++;
    }

    console.log(`Round ${i} Score: Player ${playerScore} vs ${computerScore} Computer \n\n`);
}

console.log(`Final score: Player ${playerScore} vs ${computerScore} Computer`);


