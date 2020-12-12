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

// loads in the survey
$(document).on('click', '#startSurvey', function(){
  $("#survey").load('views/survey.html');
})


$(document).on('click','#submit',function(){
    $("#survey").load('views/results.html');

    var scoreOne = 0;
    var scoreTwo = 0;

    for (i = 1; i < 9; i++) {
      var questionNum = "#Q" + i.toString();
      if (i < 5){
        scoreOne += parseInt($(questionNum).val());
      }
      else {
        scoreTwo += parseInt($(questionNum).val());
      }
    }

    console.log(scoreOne, scoreTwo);
});
