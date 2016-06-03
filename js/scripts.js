


$(function(){
  $(".questionnaire").submit(function(event){
    event.preventDefault();
    var ques1 = parseInt($("#q1select option:selected").val());
    var ques2 = parseInt($("#q2select option:selected").val());
    var ques3 = parseInt($("#q3select option:selected").val());
    var ques4 = parseInt($("#q4select option:selected").val());
    var ques5 = parseInt($("#q5select option:selected").val());
    var ques6 = parseInt($("#q6select option:selected").val());
    var vaca;
    var total = ques1 + ques2 + ques3 + ques4 + ques5;
debugger;
    if(!ques6) {
      if (total >= 5 && total <10){
        vaca="Bob";
      }
        else if(total >= 10 && total < 15 && total !== 12){
        vaca="Mary";
      }
        else if(total >=15 && total <20) {
        vaca="Larry";
      }
        else if (total === 12){
        vaca="Kenny";
      }



    $(".output").empty().append("<div class='thumbnail'><div class='caption'><h3>You are: " + vaca + "</h3></div></div>");

  };
});
