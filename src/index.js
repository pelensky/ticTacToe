$(document).ready(function() {
  var game = new Game();
  var player1;
  var player2;
  $("#addPlayersButton").on("click", function(){
    var player1Name = $("#player1TextField").val();
    var player2Name = $("#player2TextField").val();
    console.log(player1Name);
    console.log(player2Name);
    var player1 = new Player(player1Name);
    var player2 = new Player(player2Name);
    console.log(player1);
    console.log(player2);
  });
});
