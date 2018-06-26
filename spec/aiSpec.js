describe("Ai", function() {
  var ai;

  beforeEach(function() {
    ai = new Ai()
  });

  describe("at the start of the game", function() {
    it("chooses four colours", function() {
      ai.chooseColours();
      expect(ai.result().length).toEqual(4)
    });
  });
});
