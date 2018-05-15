function Player() {
  this._name
}
Player.prototype.recordName = function(name) {
  this._name = name
}

Player.prototype.showName = function() {
  return this._name
}
