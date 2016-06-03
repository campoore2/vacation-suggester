$(function(){
  $(".questionnaire").submit(function(event){
    event.preventDefault();
    var ques1 = parseInt($("#ques1select option:selected").val());
    var ques2 = parseInt($("#ques2select option:selected").val());
    var ques3 = parseInt($("#ques3select option:selected").val());
    var ques4 = parseInt($("#ques4select option:selected").val());
    var ques5 = parseInt($("#ques5select option:selected").val());
    var ques6 = parseInt($("#ques6select option:selected").val());
    var vacation = ("test1")
    var vacation1 = ("test2")
    var vacation2 = ("test3")
    var vacation3 = ("wasd")
    var total = ques1 + ques2 + ques3 + ques4 + ques5

    if (total >=5 && total <10){
      vacation="test1";
    } else if (total >=10 && total <15 && total !=12){
      vacation1="test2";
    } else if (total >=16 && total <22){
      vacation2="test3";
    } else if (total ===12){
      vacation3="wasd";
    }




debugger;



    $(".output").empty().append("<div class='thumbnail'><div class='caption'><h3>You are: " + vacation + "</h3></div></div>")
  })
})
