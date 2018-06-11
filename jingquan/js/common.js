var swiper = new Swiper('.swiper-container', {
  autoplay: true, //可选选项，自动滑动
  autoplay: {
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true
  }
});

$(function () {
  $(".m-more-nav")
    .on('click', function () {
      $('.mobile-inner-nav').slideToggle();
    });

});

$(function () {
  var tophtml = "<div id=\"izl_rmenu\" class=\"izl-rmenu\"><div class=\"btn btn-top\"></div></div" +
      ">";
  var headhtml = "<div id=\"m-head-bg\" class=\"m-head-bg\"></div" +
      ">"
  $("#m-top").html(tophtml);
  $("#m-head").html(headhtml);
  $("#izl_rmenu").each(function () {
    $(this)
      .find(".btn-top")
      .click(function () {
        $("html, body").animate({
          "scroll-top": 0
        }, "fast");
      });
  });

  var lastRmenuStatus = false;
  $(window).scroll(function () {
    var _top = $(window).scrollTop();
    if (_top > 200) {
      $("#izl_rmenu").data("expanded", true);
    } else {
      $("#izl_rmenu").data("expanded", false);
    }
    if ($("#izl_rmenu").data("expanded") != lastRmenuStatus) {
      lastRmenuStatus = $("#izl_rmenu").data("expanded");
      if (lastRmenuStatus) {
        $("#izl_rmenu .btn-top").slideDown();
      } else {
        $("#izl_rmenu .btn-top").slideUp();
      }
    }
  });
});

// $('.m-nav ul li').click(function(){
// 	$(this).addClass('cur').siblings('.cur').removeClass('cur');	
//   })
  
$(function () {
  function getTop() {
    var top = $(document).scrollTop();
    if ($(document).scrollTop() > 200) {
      $("#m-head").fadeIn();
    } else {
      $("#m-head").fadeOut();
    }
    setTimeout(getTop);
  }
  getTop();
});

