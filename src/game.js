// Where the game is played

function Game() {
  this.player1 = null;
  this.player2 = null;
  this.currentPlayer = null;
  this.turnCount = 0;
  this.gameOver = false;
  this.winner = null;
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


Game.prototype.chooseSpace = function(space){

  if (this.player1.currentPlayer()) {
    this.board.chooseSpace(space, "X");
  } else {
    this.board.chooseSpace(space, "O");
  }
  this._incrementTurnCount();
  this._checkCurrentPlayer();
  this._isGameWon();
  this._switchTurn();
};

Game.prototype._switchTurn = function(){
  this.player1.switchTurn();
  this.player2.switchTurn();
};

Game.prototype._incrementTurnCount = function(){
  this.turnCount ++;
};

Game.prototype._isItAfterTurnThree = function(){
  if(this.turnCount > 3){
    return true;
  }
};

Game.prototype._isGameWon = function(){
  if(this._isItAfterTurnThree()){
    if (this.board.hasGameBeenWon()){
      this.gameOver = true;
      this.winner = this.currentPlayer;
    }
  }
};

Game.prototype._checkCurrentPlayer = function(){
  if(this.player1.currentPlayer()){
    this.currentPlayer = this.player1.name;
  } else {
    this.currentPlayer = this.player2.name;
  }
};
