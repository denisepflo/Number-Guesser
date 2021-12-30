let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (x, y) => {
  const diff = Math.abs(x - y)
}

const compareGuesses = (userGuess, compGuess, targetNum) => {
    const userDiff = getAbsoluteDistance(userGuess - targetNum);
    const compDiff = getAbsoluteDistance(compGuess - targetNum);
    return userDiff <= compDiff;
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer'){
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;
