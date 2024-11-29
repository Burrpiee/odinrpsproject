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

function playRound(humanChoice, computerChoice){

    switch (true){
        case (humanChoice == computerChoice):
            console.log("It's a tie.");
            break;
        
        case (humanChoice == "scissors" && computerChoice == "paper"):
        case (humanChoice == "paper" && computerChoice == "rock"):
        case (humanChoice == "rock" && computerChoice == "scissors"):
            console.log("You won!");
            humanScore++;
            break;

        case (computerChoice == "scissors" && humanChoice == "paper"):
        case (computerChoice == "paper" && humanChoice == "rock"):
        case (computerChoice == "rock" && humanChoice == "scissors"):
            console.log("You lost!");
            computerScore++;
            break; 
        default:
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
