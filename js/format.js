$(document).ready(function(){
  //add header to index.html
  $(function(){
    $("#navigation").load("header.html");
  });
  //add footer to index.html
  $(function(){
    $("#footer").load("footer.html");
  });

  //when scroll down, hide the header. when scroll up, show the header.
  $(function(){
    var previousTop = 0;
    $("#navigation").addClass("on");
    $(window).scroll(function(){
      var currentTop = $(window).scrollTop();
      if(currentTop>previousTop){
        $("#navigation").removeClass("on");
      }
      else{
        $("#navigation").addClass("on");
      }
      previousTop = currentTop;
    });
  });
});
