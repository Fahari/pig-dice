$(document).ready(function() {
  $(".btn-new").click(function() {
    reset();

  });

  $(".btn-roll-1").click(function() {

    diceRoll();

  });

  $(".btn-roll-2").click(function() {

    diceRoll2();

  });

  $('.btn-hold-1').click(function() {

    score1();
    var default0 = 0;
    $("#player1").text(default0);
    $(".btn-roll-1").hide();
    $(".btn-hold-1").hide();
    $(".btn-roll-2").show();
    $(".btn-hold-2").show();

  });
  $('.btn-hold-2').click(function() {


    score2();
    var default2 = 0;
    $("#player2").text(default2);
    $(".btn-roll-2").hide();
    $(".btn-hold-2").hide();
    $(".btn-roll-1").show();
    $(".btn-hold-1").show();

  });
});

function diceRoll() {
  var random = Math.floor(Math.random() * 6) + 1;
  $("#output2").hide();


  if (random === 1) {
    var default0 = 0;
    $("#output1").show();
    $("#output1").text("Sorry!You have rolled a 1. Player 2's turn!");
    $('#player1').text(default0);
    $(".btn-roll-1").hide();
    $(".btn-hold-1").hide();
    $(".btn-roll-2").show();
    $(".btn-hold-2").show();

  } else {

    $("#output1").show();
    $("#output1").text(random);

    var current1 = parseInt($('#player1').text());

    addTotal1(current1, random);

  }
};

function diceRoll2() {
  var random2 = Math.floor(Math.random() * 6) + 1;
  $("#output1").hide();


  if (random2 === 1) {
    var default2 = 0;
    $("#output2").show();
    $("#output2").text("Sorry!You have rolled a 1. Player 1's turn!");
    $('#player2').text(default2);
    $(".btn-roll-2").hide();
    $(".btn-hold-2").hide();
    $(".btn-roll-1").show();
    $(".btn-hold-1").show();

  } else {

    $("#output2").show();
    $("#output2").text(random2);

    var current2 = parseInt($('#player2').text());

    addTotal2(current2, random2);



  }
};

function addTotal1(num1, num2) {
  var xx = num1 + num2;
  $("#player1").text(xx);
};

function addTotal2(num1, num2) {
  var yy = num1 + num2;
  $("#player2").text(yy);
};

function score1() {

  var yipee = parseInt($('#player1').text());
  var scoreS1 = parseInt($('#score1').text());
  var fin1 = addscore(yipee, scoreS1);
  $("#score1").text(fin1);
  $("#output1").hide();

  if (fin1 >= 100) {
    alert("PLAYER 1 WINS!!!");
    $('#player1').text(zero);
    $('#player2').text(zero);
    $('#score1').text(zero);
    $('#score2').text(zero);
    $(".btn-roll-1").show();
    $(".btn-hold-1").show();
    $(".btn-roll-2").hide();
    $(".btn-hold-2").hide();
  } else {
    $("#score1").text(fin1);
    $("#output1").hide();
    $("#output2").hide();

  }
};

function score2() {

  var yipee2 = parseInt($('#player2').text());
  var scoreS2 = parseInt($('#score2').text());
  var fin2 = addscore(yipee2, scoreS2);

  if (fin2 >= 100) {
    var zero = 0;
    alert("PLAYER 2 WINS!!!");
    $('#player1').text(zero);
    $('#player2').text(zero);
    $('#score1').text(zero);
    $('#score2').text(zero);
    $(".btn-roll-1").show();
    $(".btn-hold-1").show();
    $(".btn-roll-2").hide();
    $(".btn-hold-2").hide();


  } else {
    $("#score2").text(fin2);
    $("#output2").hide();
    $("#output1").hide();

  }
};

function addscore(num1, num2) {
  var yy = num1 + num2;
  return yy;
};

function reset() {
  $("#player1").val(0);
  $("#player2").val(0);
  $("#score1").val(0);
  $("#score2").val(0);
  $("#output1").hide();
  $("#output2").hide();
  $(".btn-roll-2").hide();
  $(".btn-hold-2").hide();
  $(".btn-roll-1").show();
  $(".btn-hold-1").show();
}
