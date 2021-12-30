$(document).ready(function () {


    //STICKY MENU On Scroll
    var height = $("#menu").height();
    $(window).scroll(function () {
      if ($(this).scrollTop() > height) {
        $(".navbar").addClass("fixed");
      } else {
        $(".navbar").removeClass("fixed");
      }
    });
});


// BOTTOM TO TOP Button JS CODE
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $("#bottom-to-top").css({
        opacity: "1",
        "pointer-events": "auto",
      });
    } else {
      $("#bottom-to-top").css({
        opacity: "0",
        "pointer-events": "none",
      });
    }
  });
  $("#bottom-to-top").click(function () {
    $("html").animate({ scrollTop: 0 }, 500);
  });
});
 
 
