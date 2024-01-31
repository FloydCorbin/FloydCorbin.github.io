
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
//create a variable x that generates a random number between 0 and 9
  var x = Math.floor(Math.random() * 10);

  quote = quotes[x].text;
  author = quotes[x].author;
  $("#quote").text(quote);
  $("#author").text(author);
});

// Wordnik word of the day code below
var apis4librarians_wordnikofdaySimple = function(){function reqListener() {
  vardata = JSON.parse(this.responseText);
  console.log(data);
  
  var d1 = document.getElementById("wordnik-wordofday");
  d1.insertAdjacentHTML(
  "beforeend",
  `<span class="wordnik-word"><a href="https://www.wordnik.com/words/${data.word}">${ data.word } </a></span><span class="wordnik-word-partofspeech"> ${ data.definitions[0].partOfSpeech }</span> <br><span class="wordnik-word-definition">${ data.definitions[0].text }</span>`
  );
  }
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open(
  "GET",
  "http://api.wordnik.com:80/v4/words.json/wordOfTheDay?api_key=YOUR_API_KEY_HERE"
  );
  oReq.send();
  }();


  


