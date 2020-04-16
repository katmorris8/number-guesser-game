let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(guess, target) {
    return Math.abs(target - guess);
}

function compareGuesses(userGuess, computerGuess, target) {
    let userDiff = getAbsoluteDistance(userGuess, target);
    let computerDiff = getAbsoluteDistance(computerGuess, target);
    
    if (userGuess < 0 || userGuess > 9) {
        alert('Your guess is out of range! Pick a number between 0 and 9.')
    } else if (userDiff === computerDiff || userDiff < computerDiff) {
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

function advanceRound() {
    currentRoundNumber += 1;
}