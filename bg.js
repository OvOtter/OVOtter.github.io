$(document).ready(function(){
  setTimeout(function(){alert("Move the mouse across the whole screen! (if you haven't done so~)");},4000);
  setTimeout(function(){alert("Click me (the porcupine yes) after getting to know both of them www")},6000);
  $("#lefthalf").hover(function(){
    $("#left").css("z-index","20");
    $("#left").css("opacity","100");
    // $("body").css("background-image","url(fire.gif)");
    // https://art.pixilart.com/8a47f5d9039d919.gif
    $("body").css("background-color","#ff5050");
    $("body").css("background-image","none");
    $("body").css("background-blend-mode","lighten");
    $("#right").css("z-index","10");
    $("#right").css("opacity","0");
    $("#next").show();
  });
  $("#righthalf").hover(function(){
    $("#right").css("z-index","20");
    $("#right").css("opacity","100");
    $("body").css("background-image","none");
    $("body").css("background-color","#0099ff");
    $("#left").css("z-index","10");
    $("#left").css("opacity","0");
    $("#next").show();
  });
})
