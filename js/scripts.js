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


  //player one buttons
  $("#playerOneRoll").click(function() {
    var newRoll = diceRoll();
    $(".diceRoll").text(newRoll);
    if (newRoll === 1) {
      playerOne.turnTotal = 0;
      $(".turnTotal1").text(playerOne.turnTotal);
      $(".buttonsPlayerOne").hide();
      $(".buttonsPlayerTwo").show();
    } else {
       playerOne.turnTotalAdd(newRoll);
       $(".turnTotal1").text(playerOne.turnTotal);
    }
  });

  //playerOne hold button
  $("#playerOneHold").click(function() {
    playerOne.hold();
    playerOne.turnTotal = 0;
    $(".totalScore1").text(playerOne.total);
    $(".turnTotal1").text(playerOne.turnTotal);
    $(".buttonsPlayerOne").hide();
    $(".buttonsPlayerTwo").show();
    if (playerOne.total > 99) {
      alert("Player One is Champion!");
      playerOne.total = 0;
      playerTwo.total = 0;
      $(".totalScore1").text(playerOne.total);
      $(".turnTotal1").text(playerOne.turnTotal);
      $(".totalScore2").text(playerTwo.total);
      $(".turnTotal2").text(playerTwo.turnTotal);
    }
  });

  //start of player two buttons
  $("#playerTwoRoll").click(function() {
    var newRoll = diceRoll();
    $(".diceRoll").text(newRoll);
    if (newRoll === 1) {
      playerTwo.turnTotal = 0;
      $(".turnTotal2").text(playerTwo.turnTotal);
      $(".buttonsPlayerTwo").hide();
      $(".buttonsPlayerOne").show();
    } else {
       playerTwo.turnTotalAdd(newRoll);
       $(".turnTotal2").text(playerTwo.turnTotal);
    }
  });

  //player two hold button
  $("#playerTwoHold").click(function() {
    playerTwo.hold();
    playerTwo.turnTotal = 0;
    $(".totalScore2").text(playerTwo.total);
    $(".turnTotal2").text(playerTwo.turnTotal);
    $(".buttonsPlayerTwo").hide();
    $(".buttonsPlayerOne").show();
    if (playerTwo.total > 99) {
      alert("Player Two is Champion!");
      playerOne.total = 0;
      playerTwo.total = 0;
      $(".totalScore1").text(playerOne.total);
      $(".turnTotal1").text(playerOne.turnTotal);
      $(".totalScore2").text(playerTwo.total);
      $(".turnTotal2").text(playerTwo.turnTotal);
    }
  });
});
