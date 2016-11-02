// Business End Logic
var Player = function(turnTotal, total) {
  debugger;
  this.turnTotal = turnTotal;
  this.total = total;
}

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
  var playerOneNameInput;
  var playerTwoNameInput;
  $(".buttonsPlayerOne").parent().addClass("chosen");

  $("form").submit(function(event){
    event.preventDefault();
    playerOneNameInput = $("#playerOneName").val();
    playerTwoNameInput = $("#playerTwoName").val();
    $(".playerOneName").text(playerOneNameInput);
    $(".playerTwoName").text(playerTwoNameInput);
    $("#nameInputs").hide();
    $(".hideIt").show();
  });


  //player one buttons
  $("#playerOneRoll").click(function() {
    var newRoll = diceRoll();
    $(".diceRoll").text(newRoll);
    $("#dice").show();
    $("#dice").html('<img src="img/d' + newRoll + '.gif">')

    if (newRoll === 1) {
      playerOne.turnTotal = 0;
      $(".turnTotal1").text(playerOne.turnTotal);
      $(".buttonsPlayerOne").hide();
      $(".buttonsPlayerTwo").show();
      $(".buttonsPlayerTwo").parent().addClass("chosen");
      $(".buttonsPlayerOne").parent().removeClass("chosen");
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
    $(".buttonsPlayerTwo").parent().addClass("chosen");
    $(".buttonsPlayerOne").parent().removeClass("chosen");
    if (playerOne.total > 20) {
      playerOne.total = 0;
      playerTwo.total = 0;
      $(".totalScore1").text(playerOne.total);
      $(".turnTotal1").text(playerOne.turnTotal);
      $(".totalScore2").text(playerTwo.total);
      $(".turnTotal2").text(playerTwo.turnTotal);
      $(".hideIt").hide();
      $("#winner").show();
      $(".winnerName").text(playerOneNameInput);

    }
  });

  //start of player two buttons
  $("#playerTwoRoll").click(function() {
    var newRoll = diceRoll();
    $(".diceRoll").text(newRoll);
    $("#dice").show();
    $("#dice").html('<img src="img/d' + newRoll + '.gif">')
    if (newRoll === 1) {
      playerTwo.turnTotal = 0;
      $(".turnTotal2").text(playerTwo.turnTotal);
      $(".buttonsPlayerTwo").hide();
      $(".buttonsPlayerOne").show();
      $(".buttonsPlayerOne").parent().addClass("chosen");
      $(".buttonsPlayerTwo").parent().removeClass("chosen");
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
    $(".buttonsPlayerOne").parent().addClass("chosen");
    $(".buttonsPlayerTwo").parent().removeClass("chosen");
    if (playerTwo.total > 20) {
      playerOne.total = 0;
      playerTwo.total = 0;
      $(".totalScore1").text(playerOne.total);
      $(".turnTotal1").text(playerOne.turnTotal);
      $(".totalScore2").text(playerTwo.total);
      $(".turnTotal2").text(playerTwo.turnTotal);
      $("#winner").show();
      $(".hideIt").hide();
      $(".winnerName").text(playerTwoNameInput);
    }
  });
});
