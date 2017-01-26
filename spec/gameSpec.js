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
      game._switchTurn();
      expect(game.player1.isTurn).toEqual(false);
      expect(game.player2.isTurn).toEqual(true);
    });
  });

  describe("Choosing a space", function(){
    beforeEach(function() {
      game.addPlayer(player1);
      game.addPlayer(player2);
      game.startGame();
      game.chooseSpace("a1");
    });

    it("should allows player1 (X) to choose a space on the grid", function(){
      expect(game.board.spaces).toEqual(["X","a2","a3","b1","b2","b3","c1","c2","c3"]);
    });

    it("should allow player2 (X) to choose a space on the grid", function(){
      game.chooseSpace("a2");
      expect(game.board.spaces).toEqual(["X","O","a3","b1","b2","b3","c1","c2","c3"]);
    });

    it("should know the current player", function(){
      expect(game.currentPlayer).toEqual("Dan");
    });

    it("should continue until the board is full", function(){
      game.chooseSpace("a2");
      game.chooseSpace("a3");
      expect(game.board.spaces).toEqual(["X","O","X","b1","b2","b3","c1","c2","c3"]);
      game.chooseSpace("b1");
      expect(game.board.spaces).toEqual(["X","O","X","O","b2","b3","c1","c2","c3"]);
      game.chooseSpace("b2");
      expect(game.board.spaces).toEqual(["X","O","X","O","X","b3","c1","c2","c3"]);
      game.chooseSpace("b3");
      expect(game.board.spaces).toEqual(["X","O","X","O","X","O","c1","c2","c3"]);
      game.chooseSpace("c1");
      expect(game.board.spaces).toEqual(["X","O","X","O","X","O","X","c2","c3"]);
      game.chooseSpace("c2");
      expect(game.board.spaces).toEqual(["X","O","X","O","X","O","X","O","c3"]);
      game.chooseSpace("c3");
      expect(game.board.spaces).toEqual(["X","O","X","O","X","O","X","O","X"]);
    });
  });

  describe("turn count", function(){
    it("should increase by one each turn", function(){
      game.addPlayer(player1);
      game.addPlayer(player2);
      game.startGame();
      game.chooseSpace("a1");
      expect(game.turnCount).toEqual(1);
    });
  });

  describe("check if game is won", function(){
    beforeEach(function() {
      game.addPlayer(player1);
      game.addPlayer(player2);
      game.startGame();
      game.chooseSpace("a1");
      game.chooseSpace("b1");
      game.chooseSpace("a2");
      game.chooseSpace("b2");
    });
    it("Player 1 wins", function(){
      game.chooseSpace("a3");
      expect(game.gameOver).toEqual(true);
      expect(game.winner).toEqual("Dan");
    });

    it("Player 2 wins", function(){
      game.chooseSpace("c1");
      game.chooseSpace("b3");
      expect(game.gameOver).toEqual(true);
      expect(game.winner).toEqual("Courtney");
    });
  });

});
