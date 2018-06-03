function Ai() {
  this._colours = ["Red", "Yellow", "Grey", "White", "Pink", "Blue", "Green", "Orange"]
  this._choices = []
};
Ai.prototype.chooseColours = function() {
  for(var i = 0; i < 4; i++) {
  var idx = Math.floor(Math.random() * this._colours.length);
    this._choices.push(this._colours[idx]);
  };

  Ai.prototype.result = function() {
    return this._choices;
  };
};
