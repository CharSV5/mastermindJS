'use strict';

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("choosing to play against the computer", function() {
    it("creates an AI", function() {
      game.choosePlayer("Computer")
        expect(game.playerTwoIdentity()).toEqual("Computer")
    });
  });
});
