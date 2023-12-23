//capture the scroll event on the page and hide the image with the id of "logo" when the scroll position is greater than 5px
$(window).scroll(function () {
  if ($(document).scrollTop() > 1%) {
    $(".header").fadeOut(900);
  }
  if ($(document).scrollTop() > 99%) {
  //    //change the .nav position to fixed so that the nav bar stays at the top of the page
  //    $(".nav").css("position", "fixed");
     $(".nav").css("top", "0");
     $(".nav").css("left", "0");
  }
});
