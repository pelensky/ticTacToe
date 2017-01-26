describe("Player", function() {
  var player1;
  var player2;

  beforeEach(function() {
    player1 = new Player("Dan");
    player2 = new Player("Courtney");
  });

  it("should initialize with two players", function() {
    expect(player1.name).toEqual("Dan");
    expect(player2.name).toEqual("Courtney");
  });
});
