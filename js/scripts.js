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
      function diceRoll();
      //alert("hello there");
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
function diceRoll(){
  var random = Math.floor(Math.random() * 6) + 1;

  if(random ===1){
    $("#output").html("Sorry!You have rolled a 1. Player's 2 turn!");
    $("#player1-total").val(); = 0;
  }else{
    var currentPlayer1 = parseInt($("#player1-total").val(););
    addTot1(currentPlayer, random);
    //$("#player1-total").html("You have rolled " + random);
    alert(currentPlayer1);
  }
};

//

// another function to add to scores



// another function to add rolled value and score to total points
