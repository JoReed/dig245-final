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

// $("#results").load('views/results.html');

$(document).on('click','.submit',function(){
    $("#results").load('views/results.html');
});
