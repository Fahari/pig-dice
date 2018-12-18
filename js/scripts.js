$(document).ready(function() {
  $(".btn-new").click(function() {
    // Put condition when new game button is clicked
    //reset value to 0 and default
  //reset();
  alert("hello");
  });

  $(".btn-roll-1").click(function() {
    // Put condition when dice is rolled / clicked
    //function to generate random numbers
     diceRoll();
    //  alert("hello there");
  });

  $(".btn-roll-2").click(function() {
    // Put condition when dice is rolled / clicked
    //function to generate random numbers
     diceRoll2();
    //  alert("hello there");
  });

  $('.btn-hold-1').click(function() {
    // Put condition when hold button is clicked
    //Allocate points

    //alert("text");
    score1();
    var default0 =0;
    $("#player1").text(default0);
    $(".btn-roll-1").hide();
    $(".btn-hold-1").hide();
    $(".btn-roll-2").show();
    $(".btn-hold-2").show();

  });
    $('.btn-hold-2').click(function() {


    score2();
    var default2 =0;
    $("#player2").text(default2);
    $(".btn-roll-2").hide();
    $(".btn-hold-2").hide();
    $(".btn-roll-1").show();
    $(".btn-hold-1").show();

});


   });
//
//
//
//
// //Business Logic
//
// //create function to generate random numbers
function diceRoll() {
  var random = Math.floor(Math.random() * 6) + 1;
  $("#output2").hide();


  if (random === 1) {
    var default0 =0;
    $("#output1").show();
    $("#output1").text("Sorry!You have rolled a 1. Player 2's turn!");
    $('#player1').text(default0);
    $(".btn-roll-1").hide();
    $(".btn-hold-1").hide();
    $(".btn-roll-2").show();
    $(".btn-hold-2").show();

  } else {
    //
    // //$("#player1-total").html("You have rolled " + random);
    // //alert(currentPlayer1);
     $("#output1").show();
     $("#output1").text(random);
    // document.getElementById('player1').getAttribute('data-value') = 0;
    var current1 = parseInt($('#player1').text());
        //alert(current1);
     addTotal1(current1,random);
     //var result1 = addTotal1();


  }
};

function diceRoll2() {
  var random2 = Math.floor(Math.random() * 6) + 1;
  $("#output1").hide();


  if (random2 === 1) {
    var default2 =0;
    $("#output2").show();
    $("#output2").text("Sorry!You have rolled a 1. Player 1's turn!");
    $('#player2').text(default2);
    $(".btn-roll-2").hide();
    $(".btn-hold-2").hide();
    $(".btn-roll-1").show();
    $(".btn-hold-1").show();

  } else {
    //
    // //$("#player1-total").html("You have rolled " + random);
    // //alert(currentPlayer1);
     $("#output2").show();
     $("#output2").text(random2);
    // document.getElementById('player1').getAttribute('data-value') = 0;
    var current2 = parseInt($('#player2').text());
        //alert(current1);
     addTotal2(current2,random2);
     //var result1 = addTotal1();


  }
};


//
function addTotal1(num1,num2){
var xx= num1+num2;
$("#player1").text(xx);
 };
 function addTotal2(num1,num2){
 var yy= num1+num2;
 $("#player2").text(yy);
  };

function score1(){

  var yipee = parseInt($('#player1').text());
  var scoreS1=parseInt($('#score1').text());
  //////////////////////
  var fin1 = addscore(yipee,scoreS1);
  $("#score1").text(fin1);
  $("#output1").hide();

};
function score2(){

  var yipee2 = parseInt($('#player2').text());
  var scoreS2 = parseInt($('#score2').text());
  ////////////////////
  var fin2 = addscore(yipee2,scoreS2);
  $("#score2").text(fin2);
  $("#output2").hide();

};

function addscore(num1,num2){
var yy= num1+num2;
return yy;
};
 function scores3(){
   var totalResults1 = $('#player1').text();
   var totalResults2= $('#player2').text();

   var totalScores = totalResults1 + totalResults2;
 }



// another function to add rolled value and score to total points
