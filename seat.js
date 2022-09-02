$(document).ready(function(){
  // $("#b").hover(function(){
  //   $(this).css("width","12vw");
  // })
  $("#b").click(function(){
    $("#think1").show();
  });
  $("#join").click(function() {
    $("#b").hide();
    $("#b2").show();
    $("#think1").hide();
    setTimeout(function (){$("#think2").show();}, 3000);
  });
  $("#awkward").click(function(){
    // alert("yay");
    $("#think3").show();
    $("#think2").hide();
    setTimeout(function(){$("#b2").css("right","25vw");},1000);
  });
});
