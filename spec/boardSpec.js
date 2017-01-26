describe("Board", function() {
  var board;

  beforeEach(function() {
    board = new Board;
  });

  it("Should start with no moves on it", function() {
    expect(board.isClear).toEqual(true);
  });

  it("Should start with the game not over", function() {
    expect(board.isGameOver).toEqual(false);
  });

  it("Should start with nine spaces, that are all empty", function() {
    expect(board.spaces).toEqual(["a1","a2","a3","b1","b2","b3","c1","c2","c3"]);
  });

  it("will not be a clear board if any spaces are taken", function(){
    board.chooseSpace("a1", "X");
    expect(board.isBoardClear()).toEqual(false);
  });

  describe("Choosing a space", function(){
    it("should allow a player to choose an empty space", function(){
      expect(board.chooseSpace("a1", "X")).toEqual("X");
    });

    it("should allow a player to choose any place on the grid", function(){
      board.chooseSpace("a1", "X");
      expect(board.chooseSpace("a2","O")).toEqual("O");
      expect(board.chooseSpace("a3","X")).toEqual("X");
      expect(board.chooseSpace("b1","O")).toEqual("O");
      expect(board.chooseSpace("b2","X")).toEqual("X");
      expect(board.chooseSpace("b3","O")).toEqual("O");
      expect(board.chooseSpace("c1","X")).toEqual("X");
      expect(board.chooseSpace("c2","O")).toEqual("O");
      expect(board.chooseSpace("c3","X")).toEqual("X");
    });
  });

  describe("Winning", function(){
    it("should know when the game has not been won", function(){
      board.hasGameBeenWon();
      expect(board.isGameWon).toEqual(false);
      board.spaces = ["X","O","X","X","b2","b3","c1","c2","c3"]
      board.hasGameBeenWon();
      expect(board.isGameWon).toEqual(false);
    });
    });

    it("should know when the game has been won", function(){
      board.spaces = ["X","X","X","b1","b2","b3","c1","c2","c3"]
      expect(board.hasGameBeenWon()).toEqual(true);
      board.spaces = ["a1","a2","a3","O","O","O","c1","c2","c3"]
      expect(board.hasGameBeenWon()).toEqual(true);
      board.spaces = ["X","a2","a3","b1","X","b3","c1","c2","X"]
      expect(board.hasGameBeenWon()).toEqual(true);
  });
});
