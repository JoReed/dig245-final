// "use strict";
// Function that shows the survey to the user
function showSurvey() {
    var T = document.getElementById("survey");
    T.style.display = "block";  // <-- Set it to block
}
// Function that opens the bad websote
function openBadWebsite() {
  var badWebsite = window.open("http://www.gatesnfences.com/", "_blank");
}
// Function that opens the good websote
function openGoodWebsite() {
  var goodWebsite = window.open("https://aluminumfencesdirect.net", "_blank");
}



$(document).on('click','.submit',function(){
    $("#results").load('views/results.html');

    var scoreOne = 0;
    var scoreTwo = 0;

    for (int i = 1; i < 9; i++) {
      var questionNum = "#Q" + str(i);
      if (1 < 5){
        scoreOne += $( questionNum ).val();
      }
      else {
        scoreTwo += $( questionNum ).val();
      }
    }
    console.log("Hello");
    console.log(scoreOne, scoreTwo);
});
