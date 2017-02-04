$(document).ready(function() {
  var game = new Game();
  var player1;
  var player2;

  $("#addPlayersButton").on("click", function(){
    var player1Name = $("#player1TextField").val();
    var player2Name = $("#player2TextField").val();
    var player1 = new Player(player1Name);
    var player2 = new Player(player2Name);
    game.addPlayers(player1, player2);
    game.startGame();
    $('#names').html(`${player1.name} vs ${player2.name}`);
    $('#turn').html(`${player1.name} starts the game.`);
  });


  $('td').on('click', function(){
    var space = $(this).attr('id');
    choosingASpace(parseInt(space));
  })


  function choosingASpace(space){
    if(!game.gameOver){
    game.chooseSpace(space);
    if(game.currentPlayer === game.player1.name){
      $(`#${space}`).html(`X`);
    } else {
      $(`#${space}`).html(`O`);
    }
    $('#turn').html(`${game.currentOpponent}'s turn`);
    checkGameOver();
    console.log(game);
  }
}

function checkGameOver() {
  if(game.gameOver){
    if(game.winner){
      $('h1').html(`${game.winner} is the almighty winner!`);
      $( "#turn" ).remove();

    } else {
      $('h1').html(`Nobody wins, losers!`);
    }
    $('#playAgainButton').removeClass('hidden');
  }
}
});
