function Player() {
  this._name
  this._currentTurn
}
Player.prototype.recordName = function(name) {
  this._name = name
}

Player.prototype.showName = function() {
  return this._name
}

Player.prototype.turn = function(colours) {
  return this._currentTurn = colours
}

Player.prototype.showCurrentGuess = function() {
    return this._currentTurn

}
