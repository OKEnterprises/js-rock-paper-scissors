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
        return 'player'
    } else if (aBeatsB(computerSelection, playerSelection)) {
        return 'computer'
    } else {
        return 'draw'
    }
}

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