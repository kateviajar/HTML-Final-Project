$(document).ready(function(){
  //add header to index.html
  $(function(){
    $("#navigation").load("header.html");
  });
  //add footer to index.html
  $(function(){
    $("#footer").load("footer.html");
  });

  //when scroll down over than 50px, hide the header. when scroll up, show the header.
  $(function(){
    var previousTop = 0;
    $("#navigation").addClass("on");
    $(window).scroll(function(){
      var currentTop = $(window).scrollTop();
      if(currentTop-previousTop>50){
        $("#navigation").removeClass("on");
      }
      else if(currentTop-previousTop<0){
        $("#navigation").addClass("on");
      }
      previousTop = currentTop;
    });
  });

  //click each question of Q&A to toggle slideUp or slideDown
  $("#q1").click(function(){
    $("#a1").slideToggle("fast");
  });
  $("#q2").click(function(){
    $("#a2").slideToggle("fast");
  });
  $("#q3").click(function(){
    $("#a3").slideToggle("fast");
  });
  $("#q4").click(function(){
    $("#a4").slideToggle("fast");
  });
});
