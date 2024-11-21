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

function getHumanChoice() {
    let x = prompt("key in rock, paper, or scissors.");
    return x;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice.toLowerCase;
    
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
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
