let userScore = 0;
let compScore = 0;
const getUserScore = document.getElementById("user-score");
const getCompScore = document.getElementById("comp-score");
const instruction = document.getElementById("instruction");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const reset = document.getElementById("reset")

function getCompChoice() {
    const compChoice = ["scissors", "paper", "rock"];
    const ranNum = Math.floor(Math.random() * 3);
    return compChoice[ranNum];
}
function win() {
    instruction.innerHTML = "You Win !!!";
    userScore++;
    getUserScore.innerHTML = userScore;
}
function draw() {
    instruction.innerHTML = "Draw !!!";
}
function lose() {
    instruction.innerHTML = "You Lose ...";
    compScore++;
    getCompScore.innerHTML = compScore;
}

function game(userChoice) {
    let ranChoice = getCompChoice();
    switch (userChoice) {
        case "scissors":          
            if (ranChoice === "paper") {
                win();
                break;
            }
            if (ranChoice === "scissors") {
                draw();
                break;
            }
            if (ranChoice === "rock") {
                lose();
                break;
            }
        case "paper":            
            if (ranChoice === "rock") {
                win();
                break;
            }
            if (ranChoice === "paper") {
                draw();
                break;
            }
            if (ranChoice === "scissors") {
                lose();
                break;
            }
        case "rock":          
            if (ranChoice === "scissors") {
                win();
                break;
            }
            if (ranChoice === "rock") {
                draw();
                break;
            }
            if (ranChoice === "paper") {
                lose();
                break;
            }
    }
}

function letsGamimg() {
    scissors.addEventListener('click', function () {

        game("scissors");
    })
    paper.addEventListener('click', function () {

        game("paper");
    })
    rock.addEventListener('click', function () {

        game("rock");
    })
    reset.addEventListener('click', function () {
        userScore = 0;
        compScore = 0;
        getUserScore.innerHTML = 0;
        getCompScore.innerHTML = 0;
    })
}
letsGamimg();
