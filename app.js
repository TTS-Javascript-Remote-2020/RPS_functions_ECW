const hands = ['rock', 'paper', 'scissors'];

const getHand = function(hands) {
  return hands[parseInt(Math.random() * 10) % 3];
}

const player1 = {
  name: 'Elliott',
  getHand: getHand,
  score: 0,
};

const player2 = {
  name: 'Gojira',
  getHand: getHand,
  score: 0,
};

function playRound(player1, player2) {
  let winner;
  hand1 = player1.getHand(hands);
  hand2 = player2.getHand(hands);

  if (hand1 === hand2) {
    winner = 'Tie game :\\';
  } else if (
      (hand1 === 'rock' && hand2 === 'scissors') ||
      (hand1 === 'paper' && hand2 === 'rock')    ||
      (hand1 === 'scissors' && hand2 === 'paper')) {
    winner = player1;
  } else {
    winner = player2;
  }

  console.log(`Player 1: ${hand1}`);
  console.log(`Player 2: ${hand2}`);
  console.log(`Winner: ${winner.name ? winner.name : winner}`);

  return winner === 'Tie game :\\' ? null : winner;
}

function playGame(player1, player2, playUntil) {
  do {
    let winner = playRound(player1, player2);
    if (winner) {
      winner.score++;
    }
  } while (player1.score < playUntil && player2.score < playUntil)

  return player1.score > player2.score ? player1 : player2;
}

const numOfGames = 5;
console.log(`First player to ${numOfGames} is: ${playGame(player1, player2, numOfGames).name}`);
