let playerScore = 0;
let computerScore = 0;
let result ;
let playerSelection = '';

const buttons = document.querySelectorAll('.button'); 
const playerResult = document.querySelector('#playerResult');
const computerResult = document.querySelector('#comResult');
const message = document.getElementById('message');
const modalMessage = document.getElementById('modal');
const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const roundMessage = document.getElementById('raundResult');


const modal = document.getElementById('modal')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.dataset.selection;
        playRound(playerSelection);
    });
    
});


const choice = ['rock', 'paper', 'scissors']
function getComputerChoice () { 
    const randomChoice = Math.floor(Math.random() * choice.length)
    const randomChoiceValue = choice[randomChoice]
    computerAnimate(randomChoiceValue);
    return randomChoiceValue;
}

function computerAnimate (computerSelection) { 
    if(computerSelection == 'rock') {
         computerRock.style.opacity = '1';
         computerPaper.style.opacity = '0.5';
         computerScissors.style.opacity = '0.5';
     }
     else if (computerSelection == 'paper') { 
         computerPaper.style.opacity = '1';
         computerScissors.style.opacity = '0.5';
         computerRock.style.opacity = '0.5';
     }
     else if ( computerSelection == 'scissors') {
         computerScissors.style.opacity = '1';
         computerPaper.style.opacity = '0.5';
         computerRock.style.opacity = '0.5';
 }
 };


function checkWinner(playerSelection, computerSelection) { 
    
    if(playerSelection == computerSelection) {
        return 'Tie';
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ) {
        return 'Player';
    }
    else { 
        return 'Computer';
    }
}


function playRound(playerSelection) { 

    let computerSelection = getComputerChoice();

    if(checkWinner(playerSelection, computerSelection) == 'Player') { 
        result = `You won! ${playerSelection} beats ${computerSelection}.`
        playerScore++;
    }
    else if (checkWinner(playerSelection, computerSelection) == 'Computer') { 
        result = `You lost ! ${computerSelection} beats ${playerSelection}.`
        computerScore++;
    }
    else if (checkWinner(playerSelection, computerSelection) == 'Tie') { 
        result = 'Tie !';
    }

    roundMessage.innerHTML = result;
    
    playerResult.textContent = playerScore;
    computerResult.textContent = computerScore;    
    game();
    }
    

function game() {
    if(playerScore === 5) { 
        message.innerHTML = 'You won !'
        modalMessage.style.display = 'block';
    }
    else if(computerScore === 5) { 
        message.innerHTML = 'You lost !'
        modalMessage.style.display = 'block';
    }
};


/////////////////////////////////////////////////////////////////////////





 