const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const scissors = document. querySelector(".scissors");

const score = document.querySelector(".score");

const photoPaper = document.querySelector(".photo-paper");
const photoRock = document.querySelector(".photo-rock");
const photoScissors = document.querySelector(".photo-scissors");

const text = document.createElement('p');

score.appendChild(text)

let choice= "";

let humanScore = 0;
let computerScore = 0;

function game(choice){
    let computerOptions = ["paper", "rock", "scissors"];
    let computerChoice=""
    computerChoice= computerOptions[Math.floor(Math.random() * 3)]
        if(choice=="paper" && computerChoice=="paper"){
            return(text.textContent = `it's a tie! the score is currently,
             You:${humanScore}  Computer:${computerScore}`)
        }else if(choice=="rock" && computerChoice=="rock"){
            return(text.textContent = `it's a tie! the score is currently,
             You:${humanScore}  Computer:${computerScore}`)
        }else if(choice=="sissors" && computerChoice=="scissors"){
            return (text.textContent = `it's a tie! the score is currently,
             You:${humanScore}  Computer:${computerScore}`)
        }else if(choice=="paper" && computerChoice=="rock"){
            humanScore++
            return (text.textContent = `You win! the score is currently,
             You:${humanScore}  Computer:${computerScore}`)
        }else if(choice=="rock" && computerChoice=="scissors"){
            humanScore++
            return(text.textContent = `You win! the score is currently,
             You:${humanScore}  Computer:${computerScore}`)
        }else if(choice=="scissors" && computerChoice=="paper"){
            humanScore++
            return(text.textContent = `You win! the score is currently,
             You:${humanScore}  Computer:${computerScore}`)
        }else if (choice=="paper" && computerChoice=="scissors"){
            computerScore++
            return (text.textContent = `Computer wins! the score is currently,
             You:${humanScore}  Computer:${computerScore}`)
        }else if (choice=="scissors" && computerChoice=="rock"){
            computerScore++
            return(text.textContent = `Computer wins! the score is currently,
             You:${humanScore}  Computer:${computerScore}`)
        } else if (choice=="rock" && computerChoice=="paper"){
            computerScore++
            return (text.textContent = `Computer wins! the score is currently,
             You:${humanScore}  Computer:${computerScore}`)
        }
    }


function ending(){
    return (text.textContent =`Thank you for playing! Final score, 
        You:${humanScore}  Computer:${computerScore}`)
}

function zero(){
    humanScore=0
    computerScore=0
}

paper.addEventListener("click", () => {
    photoPaper.style.display= "block";
    photoRock.style.display= "none";
    photoScissors.style.display= "none";
    choice="paper";
    if (humanScore<5 && computerScore<5){
        game(choice);
    }else {ending();
    zero()};
})

rock.addEventListener("click", () => {
    photoPaper.style.display= "none";
    photoRock.style.display= "block";
    photoScissors.style.display= "none";
    choice="rock";
    if (humanScore<5 && computerScore<5){
        game(choice);
    }else {ending();
    zero()};
})

scissors.addEventListener("click", () => {
    photoPaper.style.display= "none";
    photoRock.style.display= "none";
    photoScissors.style.display= "block";
    choice="scissors";
    if (humanScore<5 && computerScore<5){
        game(choice);
    }else {ending();
    zero()};
})


