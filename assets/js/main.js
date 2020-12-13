// "use strict";
// Function that shows the survey to the user
function showResults() {
    var T = document.getElementById("results");
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
  $("#Q8").append("<p>%</p>");
})
// $( ".inner" ).append( "<p>Test</p>" );

$(document).on('click','#submit',function(){
    // $("#survey").load('views/results.html');

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
    var avgOne = scoreOne/5;
    var avgTwo = scoreTwo/5;
    showResults();

    $("#one").append("<p>"+avgOne+"%</p>");
    $("#two").append("<p>"+avgTwo+"%</p>");


    // $("#one").getElementById('one').append("<p>%</p>")
    // $("#two").getElementById('two').append("<p>%</p>")
    console.log(scoreOne, scoreTwo);
});
