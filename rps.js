let userScore = 0;
let compScore = 0;
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const scoreBoardDiv = document.getElementsByClassName("score-board");
const messageP = document.querySelector(".message > p")
const rock =document.querySelector("#rock");
const paper =document.querySelector("#paper");
const scissors =document.querySelector("#scissors");

function compChoice(){
    const choiceArray = ["rock","paper","scissors"];
    const randomNumber = Math.floor(Math.random()*3);
    return choiceArray[randomNumber];
}

function main(){
    rock.addEventListener("click", function(){
        game("rock");
    });
    
    paper.addEventListener("click", function(){
        game("paper");
    });
    
    scissors.addEventListener("click", function(){
        game("scissors");
    });
}

main();

convertLetter = letter =>{
    if(letter == "rock") return "Rocks";
    if(letter == "paper") return "Papers";
    return "Scissors";
}

const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "computer".fontsize(3).sub();

win = (userChoice, computerChoice) =>{
    userScore++;
    userScoreSpan.innerHTML = userScore;
    messageP.innerHTML = `${convertLetter(userChoice)}${smallUserWord} beats ${convertLetter(computerChoice)}${smallCompWord}. You win!`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove("green-glow");
    },300)
}

lose = (userChoice, computerChoice) =>{
    compScore++;
    compScoreSpan.innerHTML = compScore;
    messageP.innerHTML = `${convertLetter(computerChoice)}${smallCompWord} beats ${convertLetter(userChoice)}${smallUserWord}. You lose!`;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove("red-glow");
    },300)
}

draw = (userChoice, computerChoice) =>{
    messageP.innerHTML = `${convertLetter(computerChoice)}${smallCompWord} and ${convertLetter(userChoice)}${smallUserWord}. are same so its a Draw!`;
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove("gray-glow");
    },300)
}

function game(userChoice){
    const computerChoice = compChoice();
    console.log(userChoice+computerChoice);
    switch(userChoice+computerChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
        win(userChoice, computerChoice);
        break;

        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
        lose(userChoice, computerChoice);
        break;

        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        draw(userChoice, computerChoice);
        break;
    }
}
