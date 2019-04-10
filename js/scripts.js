//gh-piggy

//business logic

function Game() {

}















//UI logic

















//MASTER branch below:


// business logic for pig dice game -------
function Game(){
  this.players = [],
  this.currentId = 0,
  this.die = "scoredPoints";
}


Game.prototype.addPlayer = function(){
  player.id = this.assignId();
  this.contact.push(player);
}


// business logic for player -----
function Player(playerName, playerScore){
  this.playerName = playerName,
  this.playScore = playerScore
}

function rollDie(){
  return Math.floor(Math.random() * 6) +1;

}

//business logic for dice

function playDie(){
  this.playDie = playDie;
}

console.log(Math.floor(Math.random() * 6) +1);
console.log(rollDie());


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

      function rollDiceListenersPlayer1() {
        $("button#roll1").on("click", function(){
          $("#player1-round-score").text(rollDie());
        });
      }
      function rollDiceListenersPlayer2() {
        $("button#roll2").on("click", function(){
          $("#player2-round-score").text(rollDie());
        });
      }




      // User Interface for game ----
      var game = new Game();



      $(document).ready(function(){
        rollDiceListenersPlayer1();
        rollDiceListenersPlayer2();
        $("form#game").submit(function(event){
          event.preventDefault();
        })
      })
