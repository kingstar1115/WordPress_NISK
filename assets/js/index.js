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

//Talk to us form animation
$(".default_option").click(function () {
  $(this).parent().toggleClass("active");
});

$(".select_ul li").click(function () {
  var currentele = $(this).html();
  $("#" + $(this).parent().data("name")).html(currentele);
  var selectedOption = $(this).data("option");
  var selectedValue = $(this).data("name");

  $("#" + $(this).parent().data("name") + "-wp").attr("value", selectedValue);

  if ($(this).parent().data("name") == "amount") {
    $("#amountcheck").hide();
  }
  if ($(this).parent().data("name") == "sector") {
    $("#sectorcheck").hide();
  }
  if ($(this).parent().data("name") == "transaction") {
    $("#transactioncheck").hide();
  }
  if ($(this).parent().data("name") == "post-type") {
    $("#typecheck").hide();
    if (selectedOption == 0) {
      $(".capital-only-display").css("display", "flex");
      $(".capital-only-none").css("display", "none");
    } else {
      $(".capital-only-display").css("display", "none");
      $(".capital-only-none").css("display", "flex");
    }
  }

  $(this).parents(".select_wrap").removeClass("active");
});

// details-content-slide

// our edge slide

$(document).ready(function () {
  var fourthSlides = $(".details_content_slide");
  var current4thSlide = 0;
  var slideFourthInterval = setInterval(fourth_nextSlide, 3000);

  // click event 1st section slide nabbar
  $(".details-slider-nav > div").on("click", function () {
    setFourthActive($(this));
    var clickedFourthIndex = $(this).index();
    fourthGotoSlide(clickedFourthIndex, current4thSlide);
    current4thSlide = clickedFourthIndex;
  });

  function setFourthActive(element) {
    var clickedFourthIndex = element.index();

    $(".details-slider-nav .active").removeClass("active");
    element.addClass("active");
  }
  function fourthGotoSlide(clickedFourthIndex, current4thSlide) {
    fourthSlides.eq(current4thSlide).css("display", "none");
    current4thSlide = clickedFourthIndex;
    fourthSlides.eq(current4thSlide).css("display", "block");
  }
  function fourth_nextSlide() {
    $(".details-slider-nav .active").removeClass("active");
    fourthSlides.eq(current4thSlide).css("display", "none");
    current4thSlide = (current4thSlide + 1) % fourthSlides.length;
    fourthSlides.eq(current4thSlide).css("display", "block");
    $(".details-slider-nav div").eq(current4thSlide).addClass("active");
  }
  var navFlag = true;
  $(".navbar-toggler").click(function () {
    navFlag = !navFlag;
    if (navFlag) {
      $("#navbarSupportedContent")
        .removeClass("navbar-collapse collapse show")
        .addClass("collapse navbar-collapse");
    }
  });
  $(".footer_icon_btn").on("click", function () {
    $(".footer_icon_btn")
      .find("foot_icon_active")
      .removeClass("foot_icon_active");
    $("this").find("svg>g>path").addClass("foot_icon_active");
    $("this").find("svg>path").addClass("foot_icon_active");
  });
});

$(window).on("load resize scroll", function () {
  $(".landing-slide").each(function(){
    let windowTop = $(window).scrollTop();
    let elementTop = $(this).offset().top;
    let topPosition = windowTop - elementTop;
    $(this).css({top: topPosition/2});
  });
  $(".talk_to_us").each(function(){
    let windowTop = $(window).scrollTop();
    let elementTop = $(this).offset().top;
    let topPosition = windowTop - elementTop;
    $(this).css({top: topPosition/2});
  });
  $(".truck-section-animation").each(function(){
    let windowTop = $(window).scrollTop();
    let elementTop = $(this).offset().top;
    let topPosition = windowTop - elementTop;
    $(this).css({top: topPosition/2});
  });
  // $(".gradient_effect_background1").each(function(){
  //   let windowTop = $(window).scrollTop();
  //   let elementTop = $(this).offset().top;
  //   let topPosition = windowTop - elementTop;
  //   $(this).css({top: topPosition/2});
  // });
  $(".slide_panel").each(function () {
    let windowTop = $(window).scrollTop();
    let elementTop = $(this).offset().top;
    let topPosition = windowTop - elementTop;
    // $(this)
    //   .find(".landing-slide")
    //   .css({ top: topPosition / 2 });

    // $(this)
    //   .find(".talk_to_us")
    //   .css({ top: topPosition / 2 });
    // $(this)
    //   .find(".truck-section-animation")
    //   .css({ top: topPosition / 2 });
    $(this)
      .find(".gradient_effect_background1")
      .css({ top: topPosition / 2 });
  });
  $(".corporate-finance-section").each(function () {
    let windowTop = $(window).scrollTop();
    let elementTop = $(this).offset().top;
    let topPosition = windowTop - elementTop;
    // console.log();
    if (windowTop > elementTop) {
      $(this)
        .find(".gradient_effect_background2")
        .css({ top: topPosition / 2 });
    } else {
      $(this).find(".gradient_effect_background2").css({ top: "0px" });
    }
  });
  $(".b-corporate-finance-section").each(function () {
    let windowTop = $(window).scrollTop();
    let elementTop = $(this).offset().top;
    let topPosition = windowTop - elementTop;

    if (windowTop > elementTop) {
      $(this)
        .find(".gradient_effect_background3")
        .css({ top: topPosition / 2 });
    } else {
        $(this).find(".gradient_effect_background3").css({ top: "0px" });
    }
  });
  $(".investement-section").each(function () {
    let windowTop = $(window).scrollTop();
    let elementTop = $(this).offset().top;
    let topPosition = windowTop - elementTop;

    if (windowTop > elementTop) {
      $(this)
        .find(".gradient_effect_background4")
        .css({ top: topPosition / 2 });
    }else {
        $(this).find(".gradient_effect_background4").css({ top: "0px" });
    }
  });
});
