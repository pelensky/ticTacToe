describe("Game", function() {
  var game;
  var player1;
  var player2;

  beforeEach(function() {
    player1 = new Player("Dan");
    player2 = new Player("Courtney");
    game = new Game();
  });

  it("should initialize with two empty spaces for players", function() {
    expect(game.player1).toEqual(null);
    expect(game.player2).toEqual(null);
  });

  describe("Adding players", function(){
    it("should add player 1", function(){
      game.addPlayer(player1);
      expect(game.player1).toEqual(player1);
    });

    it("should add player 2 if player 1 is loaded", function(){
      game.addPlayer(player1);
      game.addPlayer(player2);
      expect(game.player2).toEqual(player2);
    });
  });

  describe("Taking turns", function(){
    beforeEach(function() {
      game.addPlayer(player1);
      game.addPlayer(player2);
    });

    it("should be player 1's turn at the start", function(){
      game.startGame();
      expect(game.player1.isTurn).toEqual(true);
    });

    it("should swtich turns after a player plays", function(){
      game.startGame();
      game.switchTurn();
      expect(game.player1.isTurn).toEqual(false);
      expect(game.player2.isTurn).toEqual(true);
    });
  });

});
