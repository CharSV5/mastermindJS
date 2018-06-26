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

  describe("#showTurn", function() {
    it("starts on turn 1", function() {
      expect(game.showTurn()).toEqual(1)
    });
  });

  describe("#nextTurn", function() {
    it("increments the turn counter", function() {
      expect(game.nextTurn()).toEqual(2)
    })
  })
});
