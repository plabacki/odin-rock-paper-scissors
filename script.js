function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    let choise = "";
    switch(randomNumber){
        case 0: choise = "rock"; break;
        case 1: choise = "paper"; break;
        case 2: choise = "scissor"; break;
    }
    return choise;
}

console.log(getComputerChoice());
