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
