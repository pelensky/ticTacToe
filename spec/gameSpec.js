describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should initialize with two players", function() {
    expect(game.player1).toEqual("Dan");
    expect(game.player2).toEqual("Courtney");
  });
});
