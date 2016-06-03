$(function(){
  $(".questionnaire").submit(function(event){
    event.preventDefault();
    var ques1 = parseInt($("#ques1select option:selected").val());
    var ques2 = parseInt($("#ques2select option:selected").val());
    var ques3 = parseInt($("#ques3select option:selected").val());
    var ques4 = parseInt($("#ques4select option:selected").val());
    var ques5 = parseInt($("#ques5select option:selected").val());
    var ques6 = parseInt($("#ques6select option:selected").val());
    var vacation;
    var total = ques1 + ques2 + ques3 + ques4 + ques5;

    debugger;
    if (!ques6) {
      if (total >= 5 && total <10){
        vacation = "test1";
      }
      else if (total >=10 && total <15 && total !==12) {
        vacation = "test2";
      }
      else if (total >=15 && total <20){
        vacation = "test3";
      }
      else if (total === 12){
        vacation="test4";
      }
      $(".output").empty().append("<div class='thumbnail'><div class='caption'><h3>You are: " + vacation + "</h3></div></div>");

    }
  })
})
