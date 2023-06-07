const imgElements = document.getElementsByClassName("imgs-view")[0].children;
const rightButton = document.getElementById("right-button");
const leftButton = document.getElementById("left-button");
var total_images = $(".imgs-view>img");
var total_number_img = total_images.length;
var prev_idx = total_number_img - 1;
var idx = 0;
var next_idx = 1;
var old_img_idx = 0;
teamMemberDisp(prev_idx, idx, next_idx, prev_idx - 1);
leftButton.addEventListener("click", () => {
  old_img_idx = idx + 1;
  idx = prev_idx;
  if (idx == 0) {
    prev_idx = total_number_img - 1;
  } else {
    prev_idx = idx - 1;
  }

  next_idx = idx + 1;
  if (next_idx == total_number_img) {
    next_idx = 0;
  }
  if (old_img_idx == total_number_img) {
    old_img_idx = 0;
  }
  teamMemberDisp(prev_idx, idx, next_idx, old_img_idx);
});
rightButton.addEventListener("click", () => {
  old_img_idx = idx - 1;
  idx = next_idx;
  next_idx += 1;
  if (next_idx == total_number_img) {
    next_idx = 0;
  }
  if (idx == 0) {
    prev_idx = total_number_img - 1;
  } else {
    prev_idx = idx - 1;
  }
  if (next_idx == total_number_img) {
    next_idx = 0;
  }
  if (old_img_idx == -1) {
    old_img_idx = total_number_img - 1;
  }
  teamMemberDisp(next_idx, idx, prev_idx, old_img_idx);
});

function teamMemberDisp(prevIdx, currentIdx, nextIdx, old_img_idx) {
  total_images[prevIdx].className = "pre-img";
  total_images[currentIdx].className = "main-img";
  total_images[nextIdx].className = "next-img";
  total_images[old_img_idx].className = "img-inactive";
}

$(document).ready(function () {
  var teamSlideInfo = $(".team-info");
  var old_idx = 0;
  var idx = 0;
  var total_count = teamSlideInfo.length;
  // click event 1st section slide nabbar
  $("#right-button").on("click", function () {
    old_idx = idx;
    idx++;
    idx = idx % total_count;
    myDisplay(idx, old_idx);
  });
  $("#left-button").on("click", function () {
    old_idx = idx;
    idx--;
    idx = idx % total_count;
    myDisplay(idx, old_idx);
  });

  function myDisplay(idx, old_idx) {
    teamSlideInfo.eq(old_idx).css("display", "none");
    teamSlideInfo.eq(idx).css("display", "block");

    if (teamSlideInfo.eq(idx).height() > 498) {
      teamSlideInfo.eq(idx).find(".team-member-description").css({
        maxHeight: "219px",
        overflow: "hidden",
      });

      teamSlideInfo.eq(idx).find(".read-more").show();
    }
  }

  if ($(".team-info").eq(0).height() > 498) {
    $(".team-info").eq(0).find(".team-member-description").css({
      maxHeight: "219px",
      overflow: "hidden",
    });

    $(".team-info").eq(0).find(".read-more").show();
  }

  $(".team-info .read-more").on("click", function () {
    $(this).prev().css({
      maxHeight: "unset",
      overflow: "unset",
    });

    $(this).hide();
  });
});

$(document).ready(function () {
  var default_country_url = "/assets/images/icon/country/";
  var data_business = {
    kenya: {
      val1: 50,
      val2: 50,
      val3: 60,
      val4: 70,
      text: "We provide customized solutions to support sustainable growth for your business",
    },
    zambia: {
      val1: 60,
      val2: 70,
      val3: 80,
      val4: 90,
      text: "We provide customized solutions to support sustainable growth for your business",
    },
    ethiopia: {
      val1: 85,
      val2: 93,
      val3: 23,
      val4: 12,
      text: "We provide customized solutions to support sustainable growth for your business",
    },
    uganda: {
      val1: 48,
      val2: 68,
      val3: 45,
      val4: 30,
      text: "We provide customized solutions to support sustainable growth for your business",
    },
    burundi: {
      val1: 40,
      val2: 30,
      val3: 20,
      val4: 70,
      text: "We provide customized solutions to support sustainable growth for your business",
    },
    drc: {
      val1: 50,
      val2: 50,
      val3: 60,
      val4: 70,
      text: "We provide customized solutions to support sustainable growth for your business",
    },
    tanzania: {
      val1: 50,
      val2: 50,
      val3: 60,
      val4: 70,
      text: "We provide customized solutions to support sustainable growth for your business",
    },
    malawi: {
      val1: 50,
      val2: 50,
      val3: 60,
      val4: 70,
      text: "We provide customized solutions to support sustainable growth for your business",
    },
    rwanda: {
      val1: 50,
      val2: 50,
      val3: 60,
      val4: 70,
      text: "We provide customized solutions to support sustainable growth for your business",
    },
  };

  $(".map-section .country")
    .on("mouseover", function () {
      var data_busi_info = data_business[$(this).data("country")];
      if ($(this).hasClass("'" + $(this).data("country")) + "'") {
        $(".selectedMapContainer object").attr(
          "data",
          STYLESHEET_DIRECTORY_URL +
            default_country_url +
            $(this).data("country") +
            ".svg"
        );
        if ($(this).data("country") == "kenya") {
          $(".selectedMapContainer object").css("scale", "1.2");
        }
        let business_info_data = data_business[$(this).data("country")];
        $("#val1").html(
          business_info_data.val1 +
            '<span class="map-show-item-symbol">+</span>'
        );
        $("#val2").html(
          business_info_data.val2 +
            '<span class="map-show-item-symbol">+</span>'
        );
        $("#val3").html(
          business_info_data.val3 +
            '<span class="map-show-item-symbol">+</span>'
        );
        $("#val4").html(
          business_info_data.val4 +
            '<span class="map-show-item-symbol">+</span>'
        );
        $(".quote").text('"' + business_info_data.text + '"');

        if (
          $(this).data("country") == "malawi" ||
          $(this).data("country") == "zambia"
        ) {
          $(".countryName")
            .text($(this).data("country"))
            .css("color", "#1f3d4c");
        } else {
          $(".countryName").text($(this).data("country")).css("color", "white");
        }
      }
    })
    .on("mouseleave", function () {
      $(".countryName").text("Kenya").css("color", "white");
      $(".selectedMapContainer object")
        .attr(
          "data",
          STYLESHEET_DIRECTORY_URL + default_country_url + "kenya.svg"
        )
        .css("scale", 1);
      business_info_data = data_business["kenya"];
      $("#val1").html(
        business_info_data.val1 + '<span class="map-show-item-symbol">+</span>'
      );
      $("#val2").html(
        business_info_data.val2 + '<span class="map-show-item-symbol">+</span>'
      );
      $("#val3").html(
        business_info_data.val3 + '<span class="map-show-item-symbol">+</span>'
      );
      $("#val4").html(
        business_info_data.val4 + '<span class="map-show-item-symbol">+</span>'
      );
      $(".quote").text('"' + business_info_data.text + '"');
    });
});
