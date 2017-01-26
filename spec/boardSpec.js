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
    it("should know when the game has been won", function(){
    expect(board.isGameWon()).toEqual(false);
    });
  });
});
