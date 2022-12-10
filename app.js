let playerScore = 0;
let computerScore = 0;
let result; 
let playerSelection = '';

const buttons = document.querySelectorAll('.button'); 
const playerResult = document.querySelector('#playerResult');
const computerResult = document.querySelector('#comResult');

///


buttons.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.dataset.selection;
        playRound(playerSelection);
    });
});

//
const choice = ['rock', 'paper', 'scissors']
function getComputerChoice () { 
    const randomChoice = Math.floor(Math.random() * choice.length)
    return choice[randomChoice];
}

///
function checkWinner(playerSelection, computerSelection) { 
    if(playerSelection == computerSelection) {
        return 'Tie'
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ) {
        return 'Player'
    }
    else { 
        return 'Computer'
    }
}

///
function playRound(playerSelection) { 
    let computerSelection = getComputerChoice();
    if(checkWinner(playerSelection, computerSelection) == 'Player') { 
        playerScore++;
    }
    else if (checkWinner(playerSelection, computerSelection) == 'Computer') { 
        computerScore++;
    }
    else { 
        result = 'Tie !';
    }
    playerResult.textContent = playerScore;
    computerResult.textContent = computerScore;
    console.log(playerSelection, 'player' , computerSelection, 'computer')
};    




function game() {};


/////////////////////////////////////////////////////////////////////////


playRound();


