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

  it("should initialize with a turn count of zero", function() {
    expect(game.turnCount).toEqual(0);
  });

  describe("Adding players", function(){
    it("should add player 1 (X)", function(){
      game.addPlayers(player1, player2);
      expect(game.player1).toEqual(player1);
    });

    it("should add player 2 (O) if player 1 is loaded", function(){
      game.addPlayers(player1, player2);
      expect(game.player2).toEqual(player2);
    });
  });

  describe("Taking turns", function(){
    beforeEach(function() {
      game.addPlayers(player1, player2);
    });

    it("should be player 1's (X) turn at the start", function(){
      game.startGame();
      expect(game.player1.isTurn).toEqual(true);
    });

    it("should swtich turns after a player plays", function(){
      game.startGame();
      game._switchTurn();
      expect(game.player1.isTurn).toEqual(false);
      expect(game.player2.isTurn).toEqual(true);
    });
  });

  describe("Choosing a space", function(){
    beforeEach(function() {
      game.addPlayers(player1, player2);
      game.startGame();
      game.chooseSpace(0);
    });

    it("should allows player1 (X) to choose a space on the grid", function(){
      expect(game.board.spaces).toEqual(["X",1,2,3,4,5,6,7,8]);
    });

    it("should allow player2 (X) to choose a space on the grid", function(){
      game.chooseSpace(1);
      expect(game.board.spaces).toEqual(["X","O",2,3,4,5,6,7,8]);
    });

    it("should know the current player", function(){
      expect(game.currentPlayer).toEqual("Dan");
    });

    it("should continue until the board is full", function(){
      game.chooseSpace(1);
      game.chooseSpace(2);
      expect(game.board.spaces).toEqual(["X","O","X",3,4,5,6,7,8]);
      game.chooseSpace(3);
      expect(game.board.spaces).toEqual(["X","O","X","O",4,5,6,7,8]);
      game.chooseSpace(4);
      expect(game.board.spaces).toEqual(["X","O","X","O","X",5,6,7,8]);
      game.chooseSpace(5);
      expect(game.board.spaces).toEqual(["X","O","X","O","X","O",6,7,8]);
      game.chooseSpace(6);
      expect(game.board.spaces).toEqual(["X","O","X","O","X","O","X",7,8]);
    });
  });

  describe("turn count", function(){
    it("should increase by one each turn", function(){
      game.addPlayers(player1, player2);
      game.startGame();
      game.chooseSpace(0);
      expect(game.turnCount).toEqual(1);
    });
  });

  describe("check if game is won", function(){
    beforeEach(function() {
      game.addPlayers(player1, player2);
      game.startGame();
    });
    it("Player 1 wins", function(){
      game.chooseSpace(0);
      game.chooseSpace(3);
      game.chooseSpace(1);
      game.chooseSpace(4);
      game.chooseSpace(2);
      expect(game.gameOver).toEqual(true);
      expect(game.winner).toEqual("Dan");
    });

    it("Player 2 wins", function(){
      game.chooseSpace(0);
      game.chooseSpace(3);
      game.chooseSpace(1);
      game.chooseSpace(4);
      game.chooseSpace(6);
      game.chooseSpace(5);
      expect(game.gameOver).toEqual(true);
      expect(game.winner).toEqual("Courtney");
    });

    it("longer game", function(){
      game.chooseSpace(0);
      game.chooseSpace(8);
      game.chooseSpace(6);
      game.chooseSpace(3);
      game.chooseSpace(2);
      game.chooseSpace(4);
      game.chooseSpace(1);
      expect(game.gameOver).toEqual(true);
      expect(game.winner).toEqual("Dan");
    });
  });

  describe("reset game", function(){
    it("should clear the board", function(){
      game.addPlayers(player1, player2);
      game.startGame();
      game.chooseSpace(0);
      game.chooseSpace(3);
      game.chooseSpace(1);
      game.resetGame();
      expect(game.board.spaces).toEqual([0,1,2,3,4,5,6,7,8]);
    });
  });
});
