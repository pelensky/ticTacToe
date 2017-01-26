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
    it("should add player 1 (X)", function(){
      game.addPlayer(player1);
      expect(game.player1).toEqual(player1);
    });

    it("should add player 2 (O) if player 1 is loaded", function(){
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

    it("should be player 1's (X) turn at the start", function(){
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

  describe("Choosing a space", function(){
    beforeEach(function() {
      game.addPlayer(player1);
      game.addPlayer(player2);
      game.startGame();
    });

    it("should allows the player1 (X) to choose a space on the grid", function(){
      game.chooseSpace("a1");
    expect(game.board.spaces).toEqual(["X","a2","a3","b1","b2","b3","c1","c2","c3"]);
    });
  });
});
