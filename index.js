var flip2 = true;
var degrees = 180;
var flip3 = true;
var degrees3 = 180;
var flip4 = true;
var degrees4 = 180;
$("#flip2").click(function () {
  $("#down_slide_2").slideToggle();
  flip2 = !flip2;
  degrees = flip2 ? 180 : 0;
  $(this).css({ transform: "rotate(-" + degrees + "deg)" });
  var text = flip2 ? "MORE" : "CLOSE";
  $(this).next().html(text);
});

$("#flip3").click(function () {
  $("#down_slide_3").slideToggle();
  flip3 = !flip3;
  degrees3 = flip3 ? 180 : 0;
  $(this).css({ transform: "rotate(-" + degrees3 + "deg)" });
  var text = flip3 ? "MORE" : "CLOSE";
  $(this).next().html(text);
});

$("#flip4").click(function () {
  $("#down_slide_4").slideToggle();

  flip4 = !flip4;
  degrees4 = flip4 ? 180 : 0;
  $(this).css({ transform: "rotate(-" + degrees4 + "deg)" });
  var text = flip4 ? "MORE" : "CLOSE";
  $(this).next().html(text);
});

$(document).ready(function () {
  var slides = $(".slide_new");
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide, 3000);

  // click event 1st section slide nabbar
  $(".slider-nav > div").on("click", function () {
    setActive($(this));
    var clickedIndex = $(this).index();
    gotoSlide(clickedIndex, currentSlide);
    currentSlide = clickedIndex;
  });

  function setActive(element) {
    var clickedIndex = element.index();

    $(".slider-nav .active").removeClass("active");
    element.addClass("active");
  }

  function gotoSlide(clickedIndex, currentSlide) {
    slides.eq(currentSlide).animate({ opacity: 0 }, 0);
    currentSlide = clickedIndex;
    slides.eq(currentSlide).animate({ opacity: 1 }, 0);
  }
  function nextSlide() {
    $(".slider-nav .active").removeClass("active");
    slides.eq(currentSlide).animate({ opacity: 0 }, 300);
    currentSlide = (currentSlide + 1) % slides.length;
    slides.eq(currentSlide).animate({ opacity: 1 }, 300);
    $(".slider-nav div").eq(currentSlide).addClass("active");
  }
});

$(document).ready(function () {
  var secondSlides = $(".landing-second-section");
  var current2ndSlide = 0;
  var slideSecondInterval = setInterval(second_nextSlide, 3000);

  // click event 1st section slide nabbar
  $(".second-slider-nav > div").on("click", function () {
    setSecondActive($(this));
    var clickedSecondIndex = $(this).index();
    secondGotoSlide(clickedSecondIndex, current2ndSlide);
    current2ndSlide = clickedSecondIndex;
  });

  function setSecondActive(element) {
    var clickedSecondIndex = element.index();

    $(".second-slider-nav .active").removeClass("active");
    element.addClass("active");
  }

  function secondGotoSlide(clickedSecondIndex, current2ndSlide) {
    secondSlides.eq(current2ndSlide).css("display", "none");
    current2ndSlide = clickedSecondIndex;
    secondSlides.eq(current2ndSlide).css("display", "block");
  }
  var i = 0;
  function second_nextSlide() {
    $(".second-slider-nav .active").removeClass("active");
    secondSlides.eq(current2ndSlide).css("display", "none");
    current2ndSlide = (current2ndSlide + 1) % secondSlides.length;
    secondSlides.eq(current2ndSlide).css("display", "block");
    $(".second-slider-nav div").eq(current2ndSlide).addClass("active");
  }
});

// our edge slide
$(document).ready(function () {
  var thirdSlides = $(".edge-slide-update");
  var current3rdSlide = 0;
  var slideThirdInterval = setInterval(third_nextSlide, 3000);

  // click event 1st section slide nabbar
  $(".edge-slider-nav > div").on("click", function () {
    setThirdActive($(this));
    var clickedThirdIndex = $(this).index();
    thirdGotoSlide(clickedThirdIndex, current3rdSlide);
    current3rdSlide = clickedThirdIndex;
  });

  function setThirdActive(element) {
    var clickedThirdIndex = element.index();

    $(".edge-slider-nav .active").removeClass("active");
    element.addClass("active");
  }

  function thirdGotoSlide(clickedThirdIndex, current3rdSlide) {
    thirdSlides.eq(current3rdSlide).css("display", "none");
    current3rdSlide = clickedThirdIndex;
    thirdSlides.eq(current3rdSlide).css("display", "block");
  }
  var i = 0;
  function third_nextSlide() {
    $(".edge-slider-nav .active").removeClass("active");
    thirdSlides.eq(current3rdSlide).css("display", "none");
    current3rdSlide = (current3rdSlide + 1) % thirdSlides.length;
    thirdSlides.eq(current3rdSlide).css("display", "block");
    $(".edge-slider-nav div").eq(current3rdSlide).addClass("active");
  }
});
