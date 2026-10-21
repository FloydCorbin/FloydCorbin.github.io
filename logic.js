
//capture the scroll event on the page and hide the image with the id of "logo" when the scroll position is greater than 5px
$(window).scroll(function () {
  var docHeight = $(document).height();
  var scrollPos = $(document).scrollTop();
  var scrollPercent = (scrollPos / docHeight) * 100;

  if (scrollPercent > 1)
  {
    $(".header").fadeOut(900);
  }
  if (scrollPercent > 99) {
     $(".nav").css("top", "0");
     $(".nav").css("left", "0");
  }
});


//when the page loads, create an array called "quotes" and call this endpoint (https://stoic-quotes.com/api/quotes) to get a random quote to fill the array
var quotes = [];
var quote = "";
var author = "";

$.ajax({
  url: "https://stoic-quotes.com/api/quotes",
  method: "GET"
}).then(function (response) {
  quotes = Array.isArray(response) ? response : [];
  if (!quotes.length) {
    $("#quote").text("Stay curious, keep learning.");
    $("#author").text("Floyd Corbin");
    return;
  }

  var x = Math.floor(Math.random() * quotes.length);
  var selectedQuote = quotes[x] || {};

  quote = selectedQuote.text || "Stay curious, keep learning.";
  author = selectedQuote.author || "Floyd Corbin";
  $("#quote").text(quote);
  $("#author").text(author);
}).fail(function () {
  $("#quote").text("Stay curious, keep learning.");
  $("#author").text("Floyd Corbin");
});


// mobile nav
function updateNavigationVisibility() {
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (viewportWidth <= 768) {
    $("#mobile-nav").show();
    $("#highlighting_nav").hide();
  } else {
    $("#mobile-nav").hide();
    $("#highlighting_nav").show();
  }
}

window.addEventListener("resize", updateNavigationVisibility);
window.addEventListener("load", updateNavigationVisibility);

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".current-year").forEach(function (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  });
});