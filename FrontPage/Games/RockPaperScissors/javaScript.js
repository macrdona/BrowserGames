function ComputerPlay(map){
    return map.get(Math.floor(Math.random() * 3) +1);
}

function ConfigureElements(p, button, string){
    p.textContent = string;
    p.style.cssText = "color: white;"

    button.innerHTML = "Re-start game";
    button.style.cssText = "color: red;"

    const element = document.getElementsByClassName("container3");
    element[0].appendChild(p);
    element[0].appendChild(button);

    
    button.onclick = function(){
        element[0].removeChild(p);
        element[0].removeChild(button);
    }
}

function Game(computerSelect, playerSelect){
    const p = document.createElement("p");
    const button = document.createElement("button")
    let string = "RESULTS\n";

    if(computerSelect === playerSelect){
        string += `Computer selected: ${computerSelect}\n` 
        + `Player selected: ${playerSelect}\n` 
        + "Game is tied";
    }
    else if((computerSelect === "rock" && playerSelect === "scissors")
        || (computerSelect === "scissors" && playerSelect === "paper")
        || (computerSelect === "paper" && playerSelect === "rock")){

        string += `Computer selected: ${computerSelect}\n` 
        + `Player selected: ${playerSelect}\n` 
        + "Computer Wins";
        button.classList.add("resultsLose");
    }
    else{
        string += `Computer selected: ${computerSelect}\n` 
        + `Player selected: ${playerSelect}\n` 
        + "Player Wins";
        button.classList.add("resultsWin");
    }

    ConfigureElements(p, button, string);
}

//MAIN
const map = new Map();
map.set(1, "paper");
map.set(2, "rock");
map.set(3, "scissors");

let playerSelect = "";

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("Initializing new game");
        playerSelect = button.id;
        playerSelect = playerSelect.toLowerCase();
        Game(ComputerPlay(map), playerSelect);

    });
});



    