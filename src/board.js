//Tracks the board the game is played on

function Board() {
  this.isClear = true;
  this.isGameOver = false;
  this.isGameWon = false;
  this.spaces = [0, 1, 2, 3, 4, 5, 6, 7, 8]
}

Board.prototype.chooseSpace = function(space, player){
  for(var i=0; i < this.spaces.length; i++){
    if(space === this.spaces[i]){
      this.spaces[i] = player;
      return this.spaces[i]
    }
  }
};

Board.prototype.isBoardClear = function(){
  return this.spaces === [0, 1, 2, 3, 4, 5, 6, 7, 8];
};

Board.prototype.hasGameBeenWon = function(){
  var WINNINGSCENARIOS = [
    (this.spaces[0] === this.spaces[1]) && (this.spaces[0] === this.spaces[2]),
    (this.spaces[3] === this.spaces[4]) && (this.spaces[3] === this.spaces[5]),
    (this.spaces[6] === this.spaces[7]) && (this.spaces[6] === this.spaces[8]),
    (this.spaces[0] === this.spaces[3]) && (this.spaces[0] === this.spaces[6]),
    (this.spaces[1] === this.spaces[4]) && (this.spaces[1] === this.spaces[7]),
    (this.spaces[2] === this.spaces[5]) && (this.spaces[2] === this.spaces[8]),
    (this.spaces[0] === this.spaces[4]) && (this.spaces[0] === this.spaces[8]),
    (this.spaces[2] === this.spaces[4]) && (this.spaces[2] === this.spaces[6]),
  ];
  for(var i=0; i<WINNINGSCENARIOS.length; i ++){
    if(WINNINGSCENARIOS[i]){
      this.isGameOver = true;
      this.isGameWon = true;
      return true;
    }
  }
};
