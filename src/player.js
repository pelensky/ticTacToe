// Controls the players

function Player(name) {
  this.name = name;
  this.isTurn = false;
}

Player.prototype.switchTurn = function(){
  if (this.isTurn){
    this.isTurn = false;
  } else {
    this.isTurn = true;
  }
};

Player.prototype.currentPlayer = function(){
  if(this.isTurn){
    return true;
  } else {
    return false;
  }
}
