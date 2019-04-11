// business logic for pig dice game -------
var player1 = "";
var player2 = "";
// business logic for player -----

function Player(player1, player2, players, score, tempscore){
  this.player1 = player1;
  this.player2 = player2;
  this.players =[];
  this.score = 0;
  this.tempscore = tempscore;
}

function Player(score, tempscore) {
  this.score = score,
  this.tempscore = tempscore
}
var player1 = new Player(0, 0);
var player2 = new Player(0, 0);

console.log(player1.score);
function Game(){
  this.players = []
}
//
// Game.prototype.addplayer = function(player) {
//   // this.players.push(player);
//   this.players.push(players);
//
// }


// console.log(players.player1.player1score);


function rollDie(){
   return Math.floor(Math.random() * 6) +1;

}

//business logic for die
function rollDiceListenersPlayer1() {
  $("button#roll1").on("click", function(){
    var player1Roll = rollDie();
    $("#player1-die-roll").text(player1Roll);
    var roundScore = ((player1.tempscore) += player1Roll);
    if (player1Roll === 1) {
      player1.tempscore = 0;
      roundScore = 0;
      alert("Oops! You rolled a 1. It's the other player's turn now.");
    }

    $("#player1-round-score").text(roundScore);

    console.log(roundScore);
  });
}
function rollDiceListenersPlayer2() {
  $("button#roll2").on("click", function(){
     var player2Roll = rollDie();
    $("#player2-die-roll").text(player2Roll);
    var roundScore = ((player2.tempscore) += player2Roll)
    if (player2Roll === 1) {
      player2.tempscore = 0;
      roundScore = 0;
      alert("Oops! You rolled a 1. It's the other player's turn now.");
    }
    $("#player2-round-score").text(roundScore);


  });
}


function holdListenerPlayer1(){
  $("button#hold1").on("click", function(){
    alert('Hold! Change players.');
    var totalScore = (player1.tempscore += player1.score);
    player1.score = totalScore;
    player1.tempscore = 0;
      $("#player1-round-score").text(0);
    $("#player1-total-score").text(totalScore);
    if(player1.score >= 100) {
      alert("Player1 You Are The Winner!");
      player1.tempscore = 0;
      player1.score = 0;
      player2.tempscore = 0;
      player2.score = 0;
      $("#player1-round-score").text(0);
      $("#player1-total-score").text(0);
      $("#player2-round-score").text(0);
      $("#player2-total-score").text(0);
    }
  });
}
function holdListenerPlayer2(){
  $("button#hold2").on("click", function(){
    alert('Hold! Change players.');
    var totalScore = (player2.tempscore += player2.score);
    player2.score = totalScore;
    player2.tempscore = 0;
      $("#player2-round-score").text(0);
    $("#player2-total-score").text(totalScore);
    if(player2.score >= 100) {
      alert("Player2 You Are The Winner!");
      player1.tempscore = 0;
      player1.score = 0;
      player2.tempscore = 0;
      player2.score = 0;
      $("#player1-round-score").text(0);
      $("#player1-total-score").text(0);
      $("#player2-round-score").text(0);
      $("#player2-total-score").text(0);
    }
  });
}

function rulesListeners(){
  $("button#rules").on("click", function (){
    $("#game").toggle();
    $(".show-rules").toggle();
  })
}


// User Interface for game ----
var game = new Game();



$(document).ready(function(){
  rollDiceListenersPlayer1();
  rollDiceListenersPlayer2();
  holdListenerPlayer1();
  holdListenerPlayer2();
  rulesListeners();
  $("form#game").submit(function(event){
    event.preventDefault();

  })
})








//1 round dice

// function playerTurn () {
//   var roundScore = 0;
//   var rollResults = rollDie();
//   console.log(rollResults);
//   while (player && rollDie() != 1 && playScore <= 100) {
//     function playerRoll(){
//       roundScore += rollDie();
//     }
//
//     function playScoring () {
//       if (rollDie() === 1){
//         roundScore = 0;
//         //end turn & switch player;
//       } else {
//         plqyScore += rollDie;
//         //show buttons: hold or roll;
//       }
//       if (hold){
//           playerScore += roundScore;
//         //switch player
//       }
//     }
//   }
//   if ( playScore >= 100) {
//     alert("You win!");
//   }
//   return plqyerScore;
// }
