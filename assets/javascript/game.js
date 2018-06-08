
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
  $("#number-to-guess").text(targetNumber);
  var crystals1 = Math.floor(Math.random() * (12 - 1) + 1);
  var crystals2 = Math.floor(Math.random() * (12 - 1) + 1);
  var crystals3 = Math.floor(Math.random() * (12 - 1) + 1);
  var crystals4 = Math.floor(Math.random() * (12 - 1) + 1);
  var counter = 0;
  var wins= 0;
  var losses= 0;

  var crystalNumbers = [crystals1, crystals2, crystals3, crystals4]
  console.log (crystalNumbers)

  for (var i = 0; i < crystalNumbers.length; i++) {

        
        var imageCrystal = $("<img width= 200 height= 200>");
    
        
        imageCrystal.addClass("#crystal-image");
    
        
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    
        
        imageCrystal.attr("data-crystalvalue", crystalNumbers[i]);
    
        
        $("#crystals").append(imageCrystal);
      }

     
  $(".crystal-image").on("click", function() {

    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
     counter = crystalValue;

    
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!")
      win++;
    }

    else if (counter >= targetNumber) {
      alert("You lose!!")
      Loss++;
    }

    var html =
    "<p> number-to-guess " + "</p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>"

    document.querySelector("#game").innerHTML = html;
  });
  
});