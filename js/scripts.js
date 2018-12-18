$(document).ready(function() {
  $(".btn-game").click(function() {
    // Put condition when new game button is clicked
    //reset value to 0 and default
  //reset();
  alert("hello");
  });

  $(".btn-roll").click(function() {
    // Put condition when dice is rolled / clicked
    //function to generate random numbers
     diceRoll();
    //  alert("hello there");
  });
 });
//   $('.btn-hold').click(function() {
//     // Put condition when hold button is clicked
//     //Allocate points
//
//   });
//
//
//
//
// //Business Logic
//
// //create function to generate random numbers
function diceRoll() {
  var random = Math.floor(Math.random() * 6) + 1;

  if (random === 1) {
    $("#output1").show();
    $("#output1").text("Sorry!You have rolled a 1. Player 2's turn!");
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
//
function addTotal1(num1,num2){
var xx= num1+num2;
$("#player1").text(xx);;
 };
//

// another function to add to scores



// another function to add rolled value and score to total points
