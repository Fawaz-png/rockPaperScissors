const buttons = document.querySelectorAll('button');
const playerdiv = document.querySelector('.player-score');
const comdiv = document.querySelector('.com-score');
const resultdiv = document.querySelector('.result');

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
const maxRounds = 5;


buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (roundCount < maxRounds) {
            const playerChoice = event.target.textContent.toLowerCase();
            const computerChoice = getComputerChoice();
            const roundResult = playRound(playerChoice, computerChoice);

            // Update the result display
            resultdiv.textContent = `Round ${roundCount + 1}: Player chose ${playerChoice}, Computer chose ${computerChoice} \n${roundResult}\n\n`;

            // Update the scores based on the round result
            if (roundResult.includes("You win")) {
                playerScore++;
            } else if (roundResult.includes("Computer wins")) {
                computerScore++;
            }

            // Update the score displays
            playerdiv.textContent = `Player Score: ${playerScore}`;
            comdiv.textContent = `Computer Score: ${computerScore}`;

            // Increment the round count
            roundCount++;

            // Check if maximum rounds reached
            if (roundCount === maxRounds) {
                // Determine and display the final winner
                if (playerScore > computerScore) {
                    resultdiv.textContent = `\nGame Over! You win the game! Final Score: Player ${playerScore} - Computer ${computerScore}`;
                } else if (computerScore > playerScore) {
                    resultdiv.textContent = `\nGame Over! Computer wins the game! Final Score: Player ${playerScore} - Computer ${computerScore}`;
                } else {
                    resultdiv.textContent = `\nGame Over! It's a tie! Final Score: Player ${playerScore} - Computer ${computerScore}`;
                }

                // Disable the buttons to prevent further input
                buttons.forEach(button => button.disabled = true);
                // Create a reset button
                const resetButton = document.createElement("button");
                resetButton.textContent = "Reset Game";

                // Add event listener to reload the page when the button is clicked
                resetButton.addEventListener('click', () => {
                    location.reload(); // This reloads the current page
                });

                // Add the reset button to the DOM (for example, at the end of the body)
                document.body.appendChild(resetButton);

            }
        }
    });
});

const getComputerChoice = () => {
    const choice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random].toLowerCase();
};

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
};
