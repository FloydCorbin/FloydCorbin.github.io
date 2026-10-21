
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


const stoicQuotes = [
  {
    quote: "If it is not right, do not do it: if it is not true, do not say it.",
    author: "Marcus Aurelius",
    source: "Meditations, 12.17"
  },
  {
    quote: "No longer talk at all about the kind of man that a good man ought to be, but be such.",
    author: "Marcus Aurelius",
    source: "Meditations, 10.16"
  },
  {
    quote: "The best way of avenging thyself is not to become like the wrong doer.",
    author: "Marcus Aurelius",
    source: "Meditations, 6.6"
  },
  {
    quote: "Men exist for the sake of one another. Teach them then or bear with them.",
    author: "Marcus Aurelius",
    source: "Meditations, 8.59"
  },
  {
    quote: "While thou livest, while it is in thy power, be good.",
    author: "Marcus Aurelius",
    source: "Meditations, 4.17"
  },
  {
    quote: "Men are disturbed, not by things, but by the principles and notions which they form concerning things.",
    author: "Epictetus",
    source: "Enchiridion, 5"
  },
  {
    quote: "No great thing is created suddenly, any more than a bunch of grapes or a fig.",
    author: "Epictetus",
    source: "Discourses, 1.15"
  },
  {
    quote: "If you wish to be a good reader, read; if you wish to be a good writer, write.",
    author: "Epictetus",
    source: "Discourses, 2.18"
  },
  {
    quote: "For it is impossible to get a man to begin to learn that which he thinks he knows.",
    author: "Epictetus",
    source: "Discourses, 2.17.1"
  },
  {
    quote: "Tell yourself, first of all, what kind of man you want to be; and then go ahead with what you are doing.",
    author: "Epictetus",
    source: "Discourses, 3.23.1"
  },
  {
    quote: "We suffer more often in imagination than in reality.",
    author: "Seneca",
    source: "Moral Letters to Lucilius, 13.4"
  },
  {
    quote: "While we are postponing, life speeds by.",
    author: "Seneca",
    source: "Moral Letters to Lucilius, 1.2"
  },
  {
    quote: "Prove your words by your deeds.",
    author: "Seneca",
    source: "Moral Letters to Lucilius, 20.1"
  },
  {
    quote: "When a man does not know what harbour he is making for, no wind is the right wind.",
    author: "Seneca",
    source: "Moral Letters to Lucilius, 71.3"
  },
  {
    quote: "If you would escape your troubles, you need not another place but another personality.",
    author: "Seneca",
    source: "Moral Letters to Lucilius, 104.8"
  }
];

$(function () {
  var randomIndex = Math.floor(Math.random() * stoicQuotes.length);
  var selectedQuote = stoicQuotes[randomIndex];
  $("#quote").text(selectedQuote.quote);
  $("#author").text(selectedQuote.author + " — " + selectedQuote.source);
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