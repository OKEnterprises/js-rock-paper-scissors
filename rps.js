const CHOICES = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let index = Math.floor(3 * Math.random());
    return CHOICES[index];
}

function aBeatsB(choiceA, choiceB) {
    choiceA = choiceA.toLowerCase();
    choiceB = choiceB.toLowerCase();
    return (choiceA === 'scissors' && choiceB === 'paper') || (choiceA === 'paper' && choiceB === 'rock') || (choiceA === 'rock' && choiceB === 'scissors')
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (aBeatsB(playerSelection, computerSelection)) {
        console.log('player');
        return 'player';
    } else if (aBeatsB(computerSelection, playerSelection)) {
        console.log('computer');
        return 'computer';
    } else {
        console.log('draw');
        return 'draw';
    }
}

const btnRock = document.querySelector('#btn-rock');
btnRock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

const btnPaper = document.querySelector('#btn-paper');
btnPaper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

const btnScissors = document.querySelector('#btn-scissors');
btnScissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});

/*
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?");
        let result = playRound(playerSelection, getComputerChoice());
        if (result === 'player') playerScore++;
        else if (result === 'computer') computerScore++;
    }
    if (playerScore > computerScore) {
        return `Player wins, ${playerScore} of 5`
    } else {
        return `Computer wins, ${computerScore} of 5`
    }
}
*/