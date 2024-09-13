
    let computer = ["paper", "rock", "scissors"];
    let person = "";
    let message="";
    let personScore=0;
    let computerScore=0;

    function chooser(computer){
        return computer[(Math.floor(Math.random()*computer.length))]
    }

    function playGame(){
    for (i=0; i<5; i++){
        
        let opponent= chooser(computer);

        while (true){
        person=prompt("please enter your choise: paper, rock, or scissors").toLowerCase();
        if (person == "paper" || person == "rock" || person == "scissors"){
            break
            }
        }

        if (person=="rock" && opponent=="rock"){
            message="It's a tie!"
        }else if (person=="scissors" && opponent=="rock"){
            message="the computer wins! rock beats scissors!"
            computerScore+=1
        }else if (person=="paper" && opponent=="rock"){
            message="you win! paper beats rock!"
            personScore+=1
        }else if (person=="rock" && opponent=="scissors"){
            message="you win! rock beats scissors!"
            personScore+=1
        }else if (person=="scissors" && opponent=="scissors"){
            message="It's a tie!"
        }else if (person=="paper" && opponent=="scissors"){
            message="the computer wins! scissors beats paper!"
            computerScore+=1
        }else if (person=="rock" && opponent=="paper"){
            message="the computer wins! paper beats rock!"
            computerScore+=1
        }else if (person=="scissors" && opponent=="paper"){
            message="you win! scissors beats paper!"
            personScore+=1
        }else if (person=="paper" && opponent=="paper"){
            message="It's a tie!"
        }
        console.log(message, `person score:paper ${personScore}`, `computer score: ${computerScore}`)
    }
}
    playGame()
