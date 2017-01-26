// Where the game is played

function Game() {
  this.player1 = null;
  this.player2 = null;
}

Game.prototype.addPlayer = function(player) {
  if (!this.player1){
    this.player1 = player;
  } else {
    this.player2 = player;
  }
};

Game.prototype.startGame = function(){
  this.player1.switchTurn();
  this.board = new Board();
};

Game.prototype.switchTurn = function(){
  this.player1.switchTurn();
  this.player2.switchTurn();
};

Game.prototype.chooseSpace = function(space){
  if (this.player1.currentPlayer()) {
    this.board.chooseSpace(space, "X");
  } else {
    this.board.chooseSpace(space, "O");
  }
  this.switchTurn();
};
