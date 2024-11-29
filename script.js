function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);

    switch (randomNum){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

const container = document.querySelector("#container");
const scoreboard= document.createElement("div");

function playRound(humanChoice, computerChoice){

    switch (true){
        case (humanChoice == computerChoice):
            console.log("It's a tie.");
            scoreboard.textContent = `Your score: ${humanScore}  Computer score: ${computerScore}`;
            container.appendChild(scoreboard);
            break;
        
        case (humanChoice == "scissors" && computerChoice == "paper"):
        case (humanChoice == "paper" && computerChoice == "rock"):
        case (humanChoice == "rock" && computerChoice == "scissors"):
            humanScore++;
            console.log("You won!")
            scoreboard.textContent = `You won! Your score: ${humanScore}  Computer score: ${computerScore}`;
            container.appendChild(scoreboard);
            gameWinner();
            break;

        case (computerChoice == "scissors" && humanChoice == "paper"):
        case (computerChoice == "paper" && humanChoice == "rock"):
        case (computerChoice == "rock" && humanChoice == "scissors"):
            computerScore++;
            console.log ("You lost.")
            scoreboard.textContent = `You lost. Your score: ${humanScore}  Computer score: ${computerScore}`;
            container.appendChild(scoreboard);
            gameWinner();
            break; 
    }
}

const rock = document.querySelector("#selectRock");
const paper = document.querySelector("#selectPaper");
const scissors = document.querySelector("#selectScissors");

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
});

const results = document.createElement("div");

function gameWinner(){
if (computerScore == 5){
    results.textContent = "You have lost the game.";
    container.appendChild(results);
}
else if (humanScore == 5){
    results.textContent = "You have won the game!";
    container.appendChild(results);
}
}

