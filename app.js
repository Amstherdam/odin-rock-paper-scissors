
const options = ['rock', 'paper', 'scissors'];

function getComputerChoice () { 
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice;
}


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

function playRound(playerSelection, computerSelection) { 
    const result = checkWinner(playerSelection, computerSelection);
    if (result == 'Player')  { 
        return `You win ${playerSelection} beats ${computerSelection}!`
    }
    else if ( result == 'Computer') { 
        return `You lose ${computerSelection} beats ${playerSelection}!`
    }
    else if (result == 'Tie') { 
        return `It is tie!`
    }
}

function getPlayerChoice() { 
    const getInput = false; 
    while( getInput == false) { 
        const choice = (prompt('Rock Paper or Scissors','')).toLowerCase();
        if(choice == null ) { 
            continue;
        }
        if(options.includes(choice)) { 
            getInput == true; 
            return choice
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice()
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log('-------------------------------------------------')
        if(checkWinner(playerSelection, computerSelection) == 'Player') { 
            playerScore++
        }
        else if (checkWinner(playerSelection, computerSelection) == 'Computer') { 
            computerScore++
        }
    }    
    console.log('*** Game Over ***')
    if(playerScore > computerScore)  {
        console.log(`Player was the winner!`)
    }
    else if (playerScore < computerScore) { 
        console.log(`Computer was the winner! :(`)
    }
    else {
        console.log('Tie , so close ')
    }
}

game();






















