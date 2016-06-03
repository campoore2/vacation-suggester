$function(){
  $(".questionnaire").submit(function(event){
    event.preventDefault();
    var ques1 = parseInt($("q1select option:selected").val());
    var ques2 = parseInt($("q2select option:selected").val());
    var ques3 = parseInt($("q3select option:selected").val());
    var ques4 = parseInt($("q4select option:selected").val());
    var ques5 = parseInt($("q5select option:selected").val());
    var dest;
    var total = ques1 + ques2 + ques3 + ques4;

    if(!ques5){
      if (total >= 4 && total <10){
        dest="Sweden";
      } else if (total >=10 && total < 15) {
        dest="Seattle";
      } else if (total >=15 && total < 20) {
        dest="test"
      } else {
        dest="Islands"
      }
      $(".output").empty().append("<div class='caption'><h3>Your Destination is: " + dest + "</h3></div></div>");
    })
  })
})
