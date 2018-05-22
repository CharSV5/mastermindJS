describe("Ai", function() {
  var ai;

  beforeEach(function() {
    ai = new Ai()
  });

  describe("at the start of the game", function() {
    it("ai chooses colours at random", function() {
      ai.chooseColours();
      expect(ai.result()).to.include("Red" || "Blue" || "Green" || "Orange" || "Grey" || "White" || "Pink" || "Yellow")
    });
    it("chooses four colours", function() {
      ai.chooseColours();
      expect(ai.result().length).toEqual(4)
    });
  });
});
