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
    $('#turn').html(`${player1.name} starts the game.`);
  });

  // var spaces = [ "a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3" ];
  //
  // for(var i = 0; i < spaces.length; i++){
  //   $(`#${spaces[i]}Link`).on("click", function(){
  //     choosingASpace(`${spaces[i]}`);
  //   });
  // }
  // $('td').on('click', function(this){
  //   var id = $(this).attr('name')
  //   choosingASpace(space);
  // })

  $("#a1Link").on("click", function(){
    var space = "a1";
    choosingASpace(space);
  });

  $("#a2Link").on("click", function(){
    var space = "a2";
    choosingASpace(space);
  });

  $("#a3Link").on("click", function(){
    var space = "a3";
    choosingASpace(space);
  });

  $("#b1Link").on("click", function(){
    var space = "b1";
    choosingASpace(space);
  });

  $("#b2Link").on("click", function(){
    var space = "b2";
    choosingASpace(space);
  });

  $("#b3Link").on("click", function(){
    var space = "b3";
    choosingASpace(space);
  });

  $("#c1Link").on("click", function(){
    var space = "c1";
    choosingASpace(space);
  });

  $("#c2Link").on("click", function(){
    var space = "c2";
    choosingASpace(space);
  });

  $("#c3Link").on("click", function(){
    var space = "c3";
    choosingASpace(space);
  });

  function choosingASpace(space){
    game.chooseSpace(space);
    if(game.currentPlayer === game.player1.name){
      $("#" + space).html(`X`);
    } else {
      $("#" + space).html(`O`);
    }
    $('#turn').html(`${game.currentOpponent}'s turn`);
    checkGameOver();
    console.log(game);
  }

  function checkGameOver() {
    if(game.gameOver){
      if(game.winner){
        $('h1').html(`${game.winner} is the almighty winner!`);
        $( "a" ).remove();
        $( "#turn" ).remove();

      } else {
      $('h1').html(`Nobody wins, losers!`);
      }
    }
  }
});
