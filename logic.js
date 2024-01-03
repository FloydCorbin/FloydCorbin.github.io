
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
  quotes = response;

  quote = quotes[0].text;
  author = quotes[0].author;
  $("#quote").text(quote);
  $("#author").text(author);

  console.log(quotes);
});




  


