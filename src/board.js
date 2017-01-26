//Tracks the board the game is played on

function Board() {
  this.isClear = true;
  this.spaces = ["a1","a2","a3","b1","b2","b3","c1","c2","c3"]
}

Board.prototype.chooseSpace = function(space, player){
  for(var i=0; i < this.spaces.length; i++){
    if(space === this.spaces[i]){
      this.spaces[i] = player;
      return this.spaces[i]
    } else {
      return "This space is taken, try again";
    }
  }
};
