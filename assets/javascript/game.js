

$(document).ready(function () {
  //your code here
  var userScore;
  var totalNumber;
  var wins=0;
  var loss=0;
  function reset() {
    var max = 120;
    var min = 19;
    totalNumber = Math.floor(Math.random() * (max - min) + min);
   userScore=0;
    var maxb1 = 12;
    var minb1 = 1;
    $("#div1").text(totalNumber);
    $("#div4").text(userScore);
    $("#img1").val(Math.floor(Math.random() * (maxb1 - minb1) + minb1));
    $("#img2").val(Math.floor(Math.random() * (maxb1 - minb1) + minb1));
    $("#img3").val(Math.floor(Math.random() * (maxb1 - minb1) + minb1));
    $("#img4").val(Math.floor(Math.random() * (maxb1 - minb1) + minb1));
  }
  function checkVal() {
    $("#div4").text(userScore);
    console.log("Entered Checkval");
    if (userScore === totalNumber) {
      wins++;
      console.log("wins" + wins);
      $("#sp1").text(wins);
      reset();
    }
    if (userScore > totalNumber) {
      loss++;
      console.log("loss" + loss);
      $("#sp2").text(loss);
      reset();
    }
  }
 reset();
  $("#img1").on("click", function () {
    console.log("b1 value:" + " " + $("#img1").val());
    userScore = userScore + parseInt($("#img1").val());
    console.log("b1" + " " + userScore);
    checkVal();
  });
  $("#img2").on("click", function () {
    console.log("b2 value:" + " " + $("#img2").val());
    userScore = userScore + parseInt($("#img2").val());
    console.log("b2" + " " + userScore);
    checkVal();
  });
  $("#img3").on("click", function () {
    console.log("b3 value:" + " " + $("#img3").val());
    userScore = userScore + parseInt($("#img3").val());
    console.log("b3" + " " + userScore);
    checkVal();
  });
  $("#img4").on("click", function () {
    console.log("b4 value:" + " " + $("#img4").val());
    userScore = userScore + parseInt($("#img4").val());
    console.log("b4" + " " + userScore);
    checkVal();
  });

});