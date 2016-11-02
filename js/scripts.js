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
      playerOne.turnTotal = 0
    } else {
      debugger;
       playerOne.turnTotalAdd(newRoll);
       $(".turnTotal1").text(playerOne.turnTotal);
       alert
    }
  });
  $("#playerTwoRoll").click(function() {
    debugger;
    var newRoll = diceRoll();
    $(".diceRoll").text(newRoll);
    if (newRoll === 1) {
      playerTwo.turnTotal = 0
    } else {
      debugger;
       playerTwo.turnTotalAdd(newRoll);
       $(".turnTotal2").text(playerTwo.turnTotal);
       alert
    }
  });
});
