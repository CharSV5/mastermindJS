function Game() {
  this.playerTwo = ""
}

Game.prototype.choosePlayer = function(playerTwoName) {
  this.playerTwo = new Player();
  this.playerTwo.recordName(playerTwoName);
}

Game.prototype.playerTwoIdentity = function() {
  return this.playerTwo.showName();
}
