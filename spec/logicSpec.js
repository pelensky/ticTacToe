describe("Logic", function() {
  var logic;

  beforeEach(function() {
    logic = new Logic;
  });

  it("The game should not be won at the start", function() {
    expect(logic.gameOver).toEqual(false);
  });
});
