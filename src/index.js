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
    console.log(game);
    game.startGame();
    $('#names').html(`${player1.name} vs ${player2.name}`);
  });

  $("#a1Link").on("click", function(){
    game.chooseSpace("a1");
    if(game.currentPlayer === game.player1.name){
      $('#a1').html(`X`);
    } else {
      $('#a1').html(`O`);
    }
    if(game.gameOver){
      $('#names').html(`<h2>${game.winner} is the almighty winner!</h2>`);
      $( "a" ).remove();
    }
    console.log(game);
  });

  $("#a2Link").on("click", function(){
    game.chooseSpace("a2");
    if(game.currentPlayer === game.player1.name){
      $('#a2').html(`X`);
    } else {
      $('#a2').html(`O`);
    }
    if(game.gameOver){
      $('#names').html(`<h2>${game.winner} is the almighty winner!</h2>`);
      $( "a" ).remove();
    }
    console.log(game);
  });

  $("#a3Link").on("click", function(){
    game.chooseSpace("a3");
    if(game.currentPlayer === game.player1.name){
      $('#a3').html(`X`);
    } else {
      $('#a3').html(`O`);
    }
    if(game.gameOver){
      $('#names').html(`<h2>${game.winner} is the almighty winner!</h2>`);
      $( "a" ).remove();
    }
    console.log(game);

  });

  $("#b1Link").on("click", function(){
    game.chooseSpace("b1");
    if(game.currentPlayer === game.player1.name){
      $('#b1').html(`X`);
    } else {
      $('#b1').html(`O`);
    }
    if(game.gameOver){
      $('#names').html(`<h2>${game.winner} is the almighty winner!</h2>`);
      $( "a" ).remove();
    }
    console.log(game);

  });

  $("#b2Link").on("click", function(){
    game.chooseSpace("b2");
    if(game.currentPlayer === game.player1.name){
      $('#b2').html(`X`);
    } else {
      $('#b2').html(`O`);
    }
    if(game.gameOver){
      $('#names').html(`<h2>${game.winner} is the almighty winner!</h2>`);
      $( "a" ).remove();
    }
    console.log(game);

  });

  $("#b3Link").on("click", function(){
    game.chooseSpace("b3");
    if(game.currentPlayer === game.player1.name){
      $('#b3').html(`X`);
    } else {
      $('#b3').html(`O`);
    }
    if(game.gameOver){
      $('#names').html(`<h2>${game.winner} is the almighty winner!</h2>`);
      $( "a" ).remove();
    }
    console.log(game);

  });

  $("#c1Link").on("click", function(){
    game.chooseSpace("c1");
    if(game.currentPlayer === game.player1.name){
      $('#c1').html(`X`);
    } else {
      $('#c1').html(`O`);
    }
    if(game.gameOver){
      $('#names').html(`<h2>${game.winner} is the almighty winner!</h2>`);
      $( "a" ).remove();
    }
    console.log(game);

  });

  $("#c2Link").on("click", function(){
    game.chooseSpace("c2");
    if(game.currentPlayer === game.player1.name){
      $('#c2').html(`X`);
    } else {
      $('#c2').html(`O`);
    }
    if(game.gameOver){
      $('#names').html(`<h2>${game.winner} is the almighty winner!</h2>`);
      $( "a" ).remove();
    }
    console.log(game);

  });

  $("#c3Link").on("click", function(){
    game.chooseSpace("c3");
    if(game.currentPlayer === game.player1.name){
      $('#c3').html(`X`);
    } else {
      $('#c3').html(`O`);
    }
    if(game.gameOver){
      $('#names').html(`<h2>${game.winner} is the almighty winner!</h2>`);
      $( "a" ).remove();
    }
    console.log(game);
  });
});
