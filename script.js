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
    let humanPrompt = prompt("key in rock, paper, or scissors.");
    return humanPrompt;
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
        default:
            break;

    }
}


function playGame() {
    for (let i = 0; i < 5 ; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (computerScore > humanScore){
        console.log("You have lost.");
    }
    else if (humanScore > computerScore){
        console.log("You have won!");
    }
    else{
        console.log("You have tied.")
    }
}

playGame();

