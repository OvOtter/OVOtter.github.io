$(document).ready(function(){
  $("#b1").click(function(){
    $(this).hide();
    $("#b2").show();
    $("#d1").show();
  });
  $("#b2").click(function(){
    $(this).hide();
    $("#d2").show();
    setTimeout(function(){for (let i=1;i<=59;i++) {
      $("#p"+i.toString()).show();
    };},100);
    $("#b3").show();
  });
  $("#b3").click(function(){
    $(this).hide();
    $("#d3").show();
    $("#d1").hide();
    $("#p1").hide();
    $("#b4").show();
  });
  $("#b4").click(function(){
    $(this).hide();
    $("#d4").show();
    $("#d2").hide();
    $("#p2").hide();
    $("#b5").show();

  });
  $("#b5").click(function(){
    $(this).hide();
    $("#d5").show();
    $("#d3").hide();
    $("#p3").hide();
    $("#b6").show();

  });
  $("#b6").click(function(){
    $(this).hide();
    $("#d6").show();
    $("#d4").hide();
    $("#p4").hide();
    $("#b7").show();

  });
  $("#b7").click(function(){
    $(this).hide();
    $("#d7").show();
    $("#d6").hide();
    $("#p6").hide();
    $("#b8").show();

  });
  $("#b8").click(function(){
    $(this).hide();
    $("#d8").show();
    $("#d7").hide();
    $("#p7").hide();
    $("#b9").show();

  });
  $("#b9").click(function(){
    $(this).hide();
    $("#d9").show();
    $("#d8").hide();
    $("#p8").hide();
    $("#b10").show();

  });
  $("#b10").click(function(){
    $(this).hide();
    $("#d10").show();
    $("#d9").hide();
    $("#p9").hide();
    $("#b11").show();

  });
  $("#b11").click(function(){
    $(this).hide();
    $("#d11").show();
    $("#d10").hide();
    $("#p10").hide();
    $("#b12").show();

  });
  $("#b12").click(function(){
    $(this).hide();
    $("#d12").show();
    $("#d5").hide();
    $("#p5").hide();
    $("#b13").show();

  });
  $("#b13").click(function(){
    $(this).hide();
    $("#d13").show();
    $("#d12").hide();
    $("#p11").hide();
    $("#b14").show();

  });
  $("#b14").click(function(){
    $(this).hide();
    $("#d14").show();
    $("#d13").hide();
    $("#p12").hide();
    $("#b15").show();

  });
  for (let i=15;i<=58;i++) {
    $("#b"+i.toString()).click(function(){
      $(this).hide();
      $("#d"+i.toString()).show();
      $("#p"+(i-2).toString()).hide();
      $("#b"+(i+1).toString()).show();

    });
  }
  $("#b15").click(function(){
    $("#d14").hide();

  });
  $("#b16").click(function(){
    $("#d15").hide();

  });
  $("#b17").click(function(){
    $("#d16").hide();

  });
  $("#b18").click(function(){
    $("#d17").hide();

  });
  $("#b19").click(function(){
    $("#d11").hide();
  });
  $("#b20").click(function(){$("#d18").hide();});$("#b21").click(function(){$("#d20").hide();});

  $("#b22").click(function(){$("#d19").hide();});
$("#b23").click(function(){$("#d22").hide();});
$("#b24").click(function(){$("#d23").hide();});
$("#b25").click(function(){$("#d24").hide();});
$("#b26").click(function(){$("#d25").hide();});
$("#b27").click(function(){$("#d26").hide();});

$("#b28").click(function(){$("#d21").hide();});
$("#b29").click(function(){$("#d28").hide();});
$("#b30").click(function(){$("#d29").hide();});
$("#b31").click(function(){$("#d30").hide();});

$("#b32").click(function(){$("#d27").hide();});

$("#b33").click(function(){$("#d31").hide();});

$("#b34").click(function(){$("#d32").hide();});
$("#b35").click(function(){$("#d34").hide();});

$("#b36").click(function(){$("#d33").hide();});
$("#b37").click(function(){$("#d35").hide();});
$("#b38").click(function(){$("#d36").hide();});
$("#b39").click(function(){$("#d37").hide();});
$("#b40").click(function(){$("#d38").hide();});
$("#b41").click(function(){$("#d39").hide();});
$("#b42").click(function(){$("#d40").hide();});
$("#b43").click(function(){$("#d42").hide();});
$("#b45").click(function(){$("#d43").hide();});
$("#b46").click(function(){$("#d45").hide();});

$("#b44").click(function(){$("#d41").hide();});
$("#b47").click(function(){$("#d44").hide();});
$("#b48").hover(function(){
  $(this).css("transform","scale(2)");
})
})
