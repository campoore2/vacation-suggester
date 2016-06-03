$(function(){
  $(".questionnaire").submit(function(event){
    event.preventDefault();
    var ques1 = parseInt($("#q1select option:selected").val());
    var ques2 = parseInt($("#q2select option:selected").val());
    var ques3 = parseInt($("#q3select option:selected").val());
    var ques4 = parseInt($("#q4select option:selected").val());
    var ques5 = parseInt($("#q5select option:selected").val());
    var ques6 = parseInt($("#q6select option:selected").val());
    var vacation = ("Sweden");
    var vacation1 = ("Bahamas");
    var vacation2 = ("Portland");
    var vacation3 = ("Florida");
    var total = ques1 + ques2 + ques3 + ques4 + ques5 + ques6

    if ("!ques6"){
    } if (total >=5 && total <10){
      $("#vacation").show();
    } else if (total >=10 && total <15){
      $("#vacation1").show();
    } else if (total >=16 && total <20){
      $("#vacation2").show();
    } else if (total >=21 && total <25){
      $("#vacation3").show();
    }





  //   if (vacation = true){
  //   $(".output").empty().append("Sweden")
  // } if (vacation1 = true){
  //   $(".output").empty().append("Bahamas")
  // } if (vacation2 = true){
  //   $(".output").empty().append("Portland")
  // } if (vacation3 = true){
  //   $(".output").empty().append("Florida")
  // }



  })
})
