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

function playerTurn (playerScore) {
  var score = 0;
  while (player && rollDie() != 1 && playScore <= 100) {
    function playerRoll(){
      score += rollDie();
  }

  if ( playScore >= 100) {
    alert("You win!");
  }
  return plqyerScore;
  }
}

// User Interface for game ----
var game = new Game();



$(document).ready(function(){
  $("form#game").submit(function(event){
    event.preventDefault();
  })
})
