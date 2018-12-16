function rollDice(){
  var dieOne = $("#die1").val();
   var output = $("#output").val();

   var d1 = Math.floor(Math.random() * 6) + 1;
   $("#die1").html(d1);
   $("#output").html("You rolled " + d1);
};
