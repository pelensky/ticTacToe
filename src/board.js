//Tracks the board the game is played on

function Board() {
  this.isClear = true;
  this.spaces = ["a1","a2","a3","b1","b2","b3","c1","c2","c3"]
}

Board.prototype._isSpaceEmpty = function(space){
  for(var i=0; i < this.spaces.length; i++){
    if(space === this.spaces[i]){
      return true;
    } else {
      return false;
    }
  }

};

Board.prototype.chooseSpace = function(space, player){
  if (this._isSpaceEmpty(space)){
    space = player;
    return space;
  }
};
