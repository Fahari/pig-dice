function rollDice(){
  var dieOne = $("#die1").val();
   var output = $("#output").val();

   var d1 = Math.floor(Math.random() * 6) + 1;
   dieOne = d1;
   $("#output").html("You rolled " + d1);
};
