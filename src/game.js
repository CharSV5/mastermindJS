function Game() {
  this.playerTwo = ""
  this.turn = 1
}

Game.prototype.choosePlayer = function(playerTwoName) {
  this.playerTwo = new Player();
  this.playerTwo.recordName(playerTwoName);
}

Game.prototype.playerTwoIdentity = function() {
  return this.playerTwo.showName();
}

Game.prototype.showTurn = function() {
  return this.turn;
}

Game.prototype.nextTurn = function() {
  return this.turn += 1;
}
