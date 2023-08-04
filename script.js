function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    let choice = "";
    switch(randomNumber){
        case 0: choice = "rock"; break;
        case 1: choice = "paper"; break;
        case 2: choice = "scissor"; break;
    }
    return choice;
}

/*function getPlayerChoice(){
    let playerChoice = prompt("Please select between rock, paper and scissors.")
    let choice = playerChoice.toLocaleLowerCase();
    return choice;
}*/

function getWinningMessage(playerChoice,symbol){
    winMessage = (playerChoice === symbol) ? "Player win" : "Computer Win";
}

function playRound(playerSelection,ComputerSelection){
    playerWinNumbers = 0
    computerWinNumbers = 0

    if((playerSelection === "rock" || ComputerSelection === "rock") && (playerSelection === "paper" || ComputerSelection === "paper")){
        getWinningMessage(playerSelection,"paper")
    } 
    else if((playerSelection === "paper" || ComputerSelection === "paper") && (playerSelection === "scissors" || ComputerSelection === "scissors")){
        getWinningMessage(playerSelection, "scissors")
    }
    else if((playerSelection === "scissors" || ComputerSelection === "scissors") && (playerSelection === "rock" || ComputerSelection === "rock")){
        getWinningMessage(playerSelection, "rock")
    }  
    else{
        winMessage = "It's a draw";
    }
    return winMessage;
}
console.log(playRound("rock","paper"));
console.log(playRound("paper","rock"));
console.log(playRound("rock","rock"));
console.log(playRound("paper","paper"));

console.log(playRound("scissors","paper"));
console.log(playRound("paper","scissors"));
console.log(playRound("scissors","scissors"));
console.log(playRound("paper","paper"));

console.log(playRound("scissors","rock"));
console.log(playRound("rock","scissors"));
console.log(playRound("scissors","scissors"));
console.log(playRound("rock","rock"));

