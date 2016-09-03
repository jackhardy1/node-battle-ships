var attack = require('./ship_methods.js').attack;

function checkGameStatus (players) {
  return false;
}

function takeTurn (opposingPlayer, guessFunction) {
  var coordinates = guessFunction();
  attack(opposingPlayer, coordinates);
  var gameOver = checkGameStatus();

  return gameOver;
}

module.exports.checkGameStatus = checkGameStatus;
module.exports.takeTurn = takeTurn;
