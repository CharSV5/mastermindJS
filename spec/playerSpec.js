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

});
