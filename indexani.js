$(document).ready(function(){
  alert("Can you find me ?-?");
  $("#p").draggable();
  $("#p").css("cursor","pointer");

  $("#small").hover(function(){
    $(this).css("top","15vh");
    $(this).draggable();
  });
  $("#hint").hover(function(){
    $(this).css("text-shadow","1px 2px 1px grey");
  })
  $("#hint").click(function(){
    $(this).append("Move the guy below me!");
  });
})
