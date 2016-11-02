// Business End Logic
var Player = function(turnTotal, total) {
  debugger;
  this.turnTotal = turnTotal;
  this.total = total;
}

// var PlayerTwo = function(turnTotal, total) {
//   this.turnTotal = turnTotal;
//   this.total = total;
// }
Player.prototype.turnTotalAdd = function(roll) {
  debugger;
  this.turnTotal = this.turnTotal + roll;
}

Player.prototype.hold = function(hold) {
  this.total += this.turnTotal;
}

function diceRoll(){
var roll = Math.floor((Math.random()*6)+1);
return roll;
}


$(document).ready(function() {
  var playerOne = new Player (0, 0);
  var playerTwo = new Player (0, 0);

  $("#playerOneRoll").click(function() {
    debugger;
    var newRoll = diceRoll();
    $(".diceRoll").text(newRoll);
    if (newRoll === 1) {
      playerOne.turnTotal = 0;
      $(".turnTotal1").text(playerOne.turnTotal);
    } else {
      debugger;
       playerOne.turnTotalAdd(newRoll);
       $(".turnTotal1").text(playerOne.turnTotal);
    }
  });
  $("#playerOneHold").click(function() {
    playerOne.hold();
    playerOne.turnTotal = 0;
    $(".totalScore1").text(playerOne.total);
    $(".turnTotal1").text(playerOne.turnTotal);
  });

  $("#playerTwoRoll").click(function() {
    debugger;
    var newRoll = diceRoll();
    $(".diceRoll").text(newRoll);
    if (newRoll === 1) {
      playerTwo.turnTotal = 0;
      $(".turnTotal2").text(playerTwo.turnTotal);
    } else {
      debugger;
       playerTwo.turnTotalAdd(newRoll);
       $(".turnTotal2").text(playerTwo.turnTotal);
    }
  });
  $("#playerTwoHold").click(function() {
    playerTwo.hold();
    playerTwo.turnTotal = 0;
    $(".totalScore2").text(playerTwo.total);
    $(".turnTotal2").text(playerTwo.turnTotal);
  });
});
