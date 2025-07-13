let score = JSON.parse(localStorage.getItem('score'));
if (score === null) {
  score = {
    Wins: 0,
    Losses: 0,
    Ties: 0
  };
}
updateScoreElement();

function playMove(playGame) {
  const ComputerMove = pickComputerMove();
  let result = '';

  if (playGame === 'Scissors') {
    if (ComputerMove === 'Rock') {
      result = 'You lose';
    } else if (ComputerMove === 'Paper') {
      result = 'You win';
    } else {
      result = 'Tie';
    }
  } else if (playGame === 'Paper') {
    if (ComputerMove === 'Rock') {
      result = 'You win';
    } else if (ComputerMove === 'Paper') {
      result = 'Tie';
    } else {
      result = 'You lose';
    }
  } else if (playGame === 'Rock') {
    if (ComputerMove === 'Rock') {
      result = 'Tie';
    } else if (ComputerMove === 'Paper') {
      result = 'You lose';
    } else {
      result = 'You win';
    }
  }

  if (result === 'You win') {
    score.Wins += 1;
  } else if (result === 'You lose') {
    score.Losses += 1;  // Fixed this line
  } else if (result === 'Tie') {
    score.Ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));  // console.log not needed here

  updateScoreElement();
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-move').innerHTML = `You Picked ${playGame}. Computer picked ${ComputerMove}.`;
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = 
    `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

function pickComputerMove() {
  let RandomNumber = Math.random();
  let ComputerMove = '';

  if (RandomNumber < 1 / 3) {
    ComputerMove = 'Rock';
  } else if (RandomNumber < 2 / 3) {
    ComputerMove = 'Paper';
  } else {
    ComputerMove = 'Scissors';
  }
  return ComputerMove;
}
