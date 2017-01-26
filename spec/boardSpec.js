describe("Board", function() {
  var board;

  beforeEach(function() {
    board = new Board;
  });

  it("Should take a name as an argument", function() {
    expect(board.isClear).toEqual(true);
  });
});
