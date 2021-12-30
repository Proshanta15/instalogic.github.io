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
 