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
    expect(board.spaces).toEqual([0,1,2,3,4,5,6,7,8]);
  });

  it("will not be a clear board if any spaces are taken", function(){
    board.chooseSpace(0, "X");
    expect(board.isBoardClear()).toEqual(false);
  });

  describe("Choosing a space", function(){
    it("should allow a player to choose an empty space", function(){
      expect(board.chooseSpace(0, "X")).toEqual("X");
    });

    it("should allow a player to choose any place on the grid", function(){
      board.chooseSpace(0, "X");
      expect(board.chooseSpace(1,"O")).toEqual("O");
      expect(board.chooseSpace(2,"X")).toEqual("X");
      expect(board.chooseSpace(3,"O")).toEqual("O");
      expect(board.chooseSpace(4,"X")).toEqual("X");
      expect(board.chooseSpace(5,"O")).toEqual("O");
      expect(board.chooseSpace(6,"X")).toEqual("X");
      expect(board.chooseSpace(7,"O")).toEqual("O");
      expect(board.chooseSpace(8,"X")).toEqual("X");
    });
  });

  describe("Winning", function(){
    it("should know when the game has not been won", function(){
      board.hasGameBeenWon();
      expect(board.hasGameBeenWon()).not.toEqual(true);
      board.spaces = ["X","O","X","X",4,5,6,7,8]
      board.hasGameBeenWon();
      expect(board.hasGameBeenWon()).not.toEqual(true);
      board.spaces = ["X","O","X","X",4,5,6,"O","O"]
      board.hasGameBeenWon();
      expect(board.hasGameBeenWon()).not.toEqual(true);
    });
  });

  it("should know when the game has been won", function(){
    board.spaces = ["X","X","X",3,4,5,6,7,8]
    expect(board.hasGameBeenWon()).toEqual(true);
    board.spaces = [0,1,2,"O","O","O",6,7,8]
    expect(board.hasGameBeenWon()).toEqual(true);
    board.spaces = ["X",1,2,3,"X",5,6,7,"X"]
    expect(board.hasGameBeenWon()).toEqual(true);
  });
});
