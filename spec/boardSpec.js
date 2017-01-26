describe("Board", function() {
  var board;

  beforeEach(function() {
    board = new Board;
  });

  it("Should start with no moves on it", function() {
    expect(board.isClear).toEqual(true);
  });

  it("Should start with nine spaces, that are all empty", function() {
    expect(board.spaces).toEqual(["a1","a2","a3","b1","b2","b3","c1","c2","c3"]);
  });

  describe("Choosing a space", function(){
    it("should allow a player to choose an empty space", function(){
      expect(board.chooseSpace("a1", "X")).toEqual("X");
    });

    it("should not allow a player to choose a taken space", function(){
      board.chooseSpace("a1", "X");
      expect(board.chooseSpace("a1", "O")).toEqual("This space is taken, try again");
    });
  });
});
