let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(userGuess, computerGuess, targetNum) {
    let userDiff = Math.abs(targetNum - userGuess);
    let computerDiff = Math.abs(targetNum - computerGuess);
    
    if (userDiff === computerDiff || userDiff < computerDiff) {
        return true;
    } else if (computerDiff < userDiff) {
        return false;
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}