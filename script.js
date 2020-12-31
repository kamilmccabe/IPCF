$(document).ready(function () {
  // run every 7s
  setInterval('cycleImages()', 9000);
})

//Get the button
var mybutton = document.getElementById("back-to-top");
var main = document.getElementById("main");

// When the user scrolls down 20px from the top of the document, show the button
main.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (main.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function cycleImages() {
  var $active = $('#cycler .active');
  var $next = ($active.next().length > 0) ? $active.next() : $('#cycler div:first');
  $next.css('z-index', 2);//move the next image up the pile
  $active.fadeOut(1500, function () {//fade out the top image
    $active.css('z-index', 1).show().removeClass('active');//reset the z-index and unhide the image
    $next.css('z-index', 3).addClass('active');//make the next image the top one
  });
}

function translateLanguage(e) {
  if ($(e)[0].textContent === "polski") {
    $(e)[0].textContent = "english";
  }
  else {
    $(e)[0].textContent = "polski";
  }
}