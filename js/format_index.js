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

//use javascript to create a function to change photos
//create a variable called number
var number = 1;
//if the next button is pressed, it will change to next photo
function nextPhoto(){
  ++number;
  if(number>4){
    number = 4;
  }
  document.getElementById('photo').src="./img/Kodak"+number+".jpg";
}
//if the previous button is pressed, it will change to previous photo
function previousPhoto(){
  --number;
  if(number<1){
    number = 1;
  }
  document.getElementById('photo').src="./img/Kodak"+number+".jpg";
}
