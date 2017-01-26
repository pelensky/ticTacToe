describe("Player", function() {
  var player1;
  var player2;

  beforeEach(function() {
    player1 = new Player("Dan");
    player2 = new Player("Courtney");
  });

  describe("Name", function(){
    it("should take a name as an argument", function() {
      expect(player1.name).toEqual("Dan");
      expect(player2.name).toEqual("Courtney");
    });
  });

  describe("Turns", function(){
    it("should know if it is the player's turn", function(){
      expect(player1.isTurn).toBe(false);
    });

    it("should set the player's turn to true (if false)", function(){
      player1.switchTurn();
      expect(player1.isTurn).toBe(true);
    });
    it("should set the player's turn to false (if true)", function(){
      player1.isTurn = true;
      player1.switchTurn();
      expect(player1.isTurn).toBe(false);
    });
  });
});
