describe("Player", function() {
  var player1;
  var player2;

  beforeEach(function() {
    player1 = new Player("Dan");
    player2 = new Player("Courtney");
  });

  it("Should take a name as an argument", function() {
    expect(player1.name).toEqual("Dan");
    expect(player2.name).toEqual("Courtney");
  });

  it("Should know if it is the player's turn", function(){
    expect(player1.isTurn).toBe(false);
  });
});
