function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    let choice = "";
    switch(randomNumber){
        case 0: choice = "rock"; break;
        case 1: choice = "paper"; break;
        case 2: choice = "scissors"; break;
    }
    return choice;
}

let playerWinNumbers = 0;
let computerWinNumbers = 0;
let draws = 0;

function getWinningMessage(playerChoice,symbol){
    winMessage = (playerChoice === symbol) ? "Player Win" : "Computer Win";
    if(winMessage === "Player Win"){
        playerWinNumbers++;
    } else {
        computerWinNumbers++;
    }
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
        draws++;
    }
    console.log(playerSelection,ComputerSelection);
    currentRound.innerHTML = winMessage;
    numberOfWin.innerHTML = `Number of match played: ${playerWinNumbers+computerWinNumbers+draws}, player win : ${playerWinNumbers}, computer win : ${computerWinNumbers}, draws : ${draws}`;

}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", () => playRound(button.id,getComputerChoice())));

const currentRound = document.querySelector("#currentRound");

const numberOfWin = document.querySelector("#numberOfWin");

const displayer = document.querySelector("#displayer");
displayer.append(currentRound, numberOfWin);

