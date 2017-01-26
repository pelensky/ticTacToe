describe("Game", function() {
  var game;
  var player1;
  var player2;

  beforeEach(function() {
    player1 = new Player("Dan");
    player2 = new Player("Courtney");
    game = new Game(player1, player2);
  });

  it("should initialize with two players", function() {
    expect(game.player1).toEqual(player1);
    expect(game.player2).toEqual(player2);
  });
});
