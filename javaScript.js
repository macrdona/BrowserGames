function ComputerPlay(map){
    return map.get(Math.floor(Math.random() * 3) +1);
}

function Game(computerSelect, playerSelect){

    if(computerSelect === playerSelect){
        console.log(`Computer selected: ${computerSelect}\n` 
        + `Player selected: ${playerSelect}\n` 
        + "Game is tied"
        );
        return 0;
    }
    else if((computerSelect === "rock" && playerSelect === "scissors")
        || (computerSelect === "scissors" && playerSelect === "paper")
        || (computerSelect === "paper" && playerSelect === "rock")){

        console.log(`Computer selected: ${computerSelect}\n` 
        + `Player selected: ${playerSelect}\n` 
        + "Computer Wins"
        );
        return 1;
    }
    else{
        console.log(`Computer selected: ${computerSelect}\n` 
        + `Player selected: ${playerSelect}\n` 
        + "Player Wins"
        );
        return 2;
    }
}

function MultipleGames(map, playerSelect){
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++){
        let wins = Game(ComputerPlay(map), playerSelect);

        if(wins == 1){
            computerWins += 1;
        }
        else if(wins == 2){
            playerWins += 1;
        }
    }

    console.log(`Player won ${playerWins} times, Computer won ${computerWins}`);
    if(computerWins > playerWins){
        console.log("Computer Wins");
    }
    else if(playerWins > computerWins){
        console.log("Player wins");
    }
    else{
        console.log("Game is tied");
    }
}

//MAIN
const map = new Map();
map.set(1, "paper");
map.set(2, "rock");
map.set(3, "scissors");

let playerSelect = "";

while(true){
    console.log("Initializing new game");
    playerSelect = prompt("Enter Paper, Rock, Scissors: ");

    if(playerSelect.toLowerCase() === "rock" || playerSelect.toLowerCase() === "paper" || playerSelect.toLowerCase() === "scissors"){
        break;
    }
    console.log("Error: Input must be Paper, Rock or Scissors");
}

playerSelect = playerSelect.toLowerCase();
MultipleGames(map, playerSelect);

    