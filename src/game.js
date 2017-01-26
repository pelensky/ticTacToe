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
