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
/*
function getPlayerChoice(){
    let playerChoice = prompt("Please select between rock, paper and scissors.")
    let choice = playerChoice.toLocaleLowerCase();
    return choice;
}*/

function getWinningMessage(playerChoice,symbol){
    winMessage = (playerChoice === symbol) ? "Player Win" : "Computer Win";
}

function playRound(playerSelection,ComputerSelection){
    
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
/*
function game(){
    playerWinNumbers = 0;
    computerWinNumbers = 0;
    draws = 0;
    for(let i = 0; i < 5; i++){
        let winner = playRound(getPlayerChoice(),getComputerChoice());
        switch(winner){
            case "Player Win": playerWinNumbers++;break;
            case "Computer Win": computerWinNumbers++;break;
            default : draws++;break;
        }
        console.log(`${winner} number of match played: ${playerWinNumbers+computerWinNumbers+draws}, player win : ${playerWinNumbers}, computer win : ${computerWinNumbers}, draws : ${draws}`);        
    }
    if(playerWinNumbers > computerWinNumbers){
        console.log("Player win the game!");
    } else if (playerWinNumbers < computerWinNumbers){
        console.log("Computer win the game!");
    } else {
        console.log("It's a draw!");
    }
}


game();
*/

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);

    });
});