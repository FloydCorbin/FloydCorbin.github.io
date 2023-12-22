//capture the scroll event on the page and hide the image with the id of "logo" when the scroll position is greater than 5px
$(window).scroll(function () {
  if ($(document).scrollTop() > 1) {
    $(".header").fadeOut(900);
  }
});
