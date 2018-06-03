'use strict';

describe("Player", function() {
  var player;


  beforeEach(function() {
    player = new Player();
  });

  describe("creating a name", function() {
    it("records a name", function() {
        player.recordName("Charlene");
      expect(player.showName()).toEqual("Charlene")
    });
  });

  describe("turn", function() {
    it("lets the player guess what the colours are", function() {
      player.turn(["Red", "Yellow", "Pink", "Grey"]);
      expect(player.showCurrentGuess()).toEqual("["Red", "Yellow", "Pink", "Grey"]")
    })
  })

});
