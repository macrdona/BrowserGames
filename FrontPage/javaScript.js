

//main

const buttons = document.querySelectorAll("button");
let id = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        id = button.id;

        if(id === "rps"){
            window.location.href = "Games/RockPaperScissors/index.html";
        }
        else if(id === "sketch"){
            window.location.href = "Games/Etch-a-Sketch/index.html";
        }
    });
});
