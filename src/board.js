//Tracks the board the game is played on

function Board() {
  this.isClear = true;
  this.isGameOver = false;
  this.spaces = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"]
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
  return this.spaces === ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
};

Board.prototype.isGameWon = function(){
  var WINNINGSCENARIOS = [
    this.spaces[0] === this.spaces[1] === this.spaces[2],
    this.spaces[3] === this.spaces[4] === this.spaces[5],
    this.spaces[6] === this.spaces[7] === this.spaces[8],
    this.spaces[0] === this.spaces[3] === this.spaces[6],
    this.spaces[1] === this.spaces[4] === this.spaces[7],
    this.spaces[2] === this.spaces[5] === this.spaces[8],
    this.spaces[0] === this.spaces[4] === this.spaces[8],
    this.spaces[2] === this.spaces[4] === this.spaces[6],
  ]
  return false;
};
