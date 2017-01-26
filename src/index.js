$(document).ready(function() {
  var game = new Game();
  var player1;
  var player2;

  $( "a" ).hide();
  $("#addPlayersButton").on("click", function(){
    var player1Name = $("#player1TextField").val();
    var player2Name = $("#player2TextField").val();
    var player1 = new Player(player1Name);
    var player2 = new Player(player2Name);
    game.addPlayers(player1, player2);
    game.startGame();
    $( "a" ).show();
    $('#names').html(`${player1.name} vs ${player2.name}`);
  });

  $("#a1Link").on("click", function(){
    var space = "a1";
    choosingASpace(space);
    checkGameOver();
  });

  $("#a2Link").on("click", function(){
    var space = "a2";
    choosingASpace(space);
  });

  $("#a3Link").on("click", function(){
    var space = "a3";
    choosingASpace(space);
    checkGameOver();

  });

  $("#b1Link").on("click", function(){
    var space = "b1";
    choosingASpace(space);
    checkGameOver();

  });

  $("#b2Link").on("click", function(){
    var space = "b2";
    choosingASpace(space);
    checkGameOver();

  });

  $("#b3Link").on("click", function(){
    var space = "b3";
    choosingASpace(space);
    checkGameOver();

  });

  $("#c1Link").on("click", function(){
    var space = "c1";
    choosingASpace(space);
    checkGameOver();
  });

  $("#c2Link").on("click", function(){
    var space = "c2";
    choosingASpace(space);
    checkGameOver();
  });

  $("#c3Link").on("click", function(){
    var space = "c3";
    choosingASpace(space);
    checkGameOver();
  });

  function choosingASpace(space){
    game.chooseSpace(space);
    if(game.currentPlayer === game.player1.name){
      $("#" + space).html(`X`);
    } else {
      $("#" + space).html(`O`);
    }
  }

  function checkGameOver() {
    if(game.gameOver){
      $('h1').html(`${game.winner} is the almighty winner!`);
      $( "a" ).remove();
    }
  }


});
