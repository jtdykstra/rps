const NUM_OPTIONS = 3;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', buttonHandler);
});

function buttonHandler(e) {
    console.log(e.srcElement.innerText);

    let result = playRound(e.srcElement.innerText, computerPlay());

    const resultText = document.querySelector('#result');

    resultText.classList.remove('shake');
    // trigger DOM reflow
    void resultText.offsetWidth;
    resultText.classList.add('shake'); 
    resultText.innerText = result;
}

function computerPlay() {
    
    let res = ["Rock", "Paper", "Scissors"];

    return res[Math.round(Math.random() * 100) % NUM_OPTIONS];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (computerSelection == playerSelection) {
            return "Tie, you both picked " + playerSelection;
    }

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You lose, paper covers rock";
        }
        if (computerSelection == "scissors") {
            return "You win, rock crushes scissors";
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win, paper covers rock";
        }
        if (computerSelection == "scissors") {
            return "You lose, scissors cut paper";
        }
    }

    if (playerSelection == "scissors") {
        console.log("player picked " + playerSelection);
        console.log("comp picked " + computerSelection);
        if (computerSelection == "rock") {
            return "You lose, rock crushes scissors";
        }
        if (computerSelection == "paper") {
            return "You win, scissors cut paper";
        }
    }
}