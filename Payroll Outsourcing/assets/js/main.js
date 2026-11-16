$(window).on('load', function() {
    gridAdjust(".info-partner-mobile-slider .info-content");
    gridAdjust(".info-advantages-mobile-slider .info-content");
    gridAdjust(".info-optimize-slider .info-content");
    gridAdjust(".info-employers-content .info-content");
    gridAdjust(".info-testmonial-content .info-content");

});

$(window).resize(function() {
  gridAdjust(".info-partner-mobile-slider .info-content");
  gridAdjust(".info-advantages-mobile-slider .info-content");
  gridAdjust(".info-optimize-slider .info-content");
  gridAdjust(".info-employers-content .info-content");
  gridAdjust(".info-testmonial-content .info-content");

});

$(window).on('load', function() {
  gridAdjust(".info-partner-mobile-slider .info-content");
  gridAdjust(".info-advantages-mobile-slider .info-content");
  gridAdjust(".info-optimize-slider .info-content");
  gridAdjust(".info-employers-content .info-content");
  gridAdjust(".info-testmonial-content .info-content");

});

$(document).ready(function() {
    mobileSlider(".info-partner-mobile-slider", 1, true, false, 767);
    mobileSlider(".info-advantages-mobile-slider", 1, true, false, 767);

});


var mobileSlider = ($slidername, $slidesToShow, $dots, $arrows, $breakpoint) => {

    var slider = $($slidername);
      var settings = {
        mobileFirst: true,
        slidesToShow: $slidesToShow,
        slidesToScroll: 1,
        dots: $dots,
        arrows: $arrows,
        autoplay: false,
        autoplaySpeed: 4000,
        infinite: true,
        responsive: [
          {
            breakpoint: $breakpoint,
            settings: "unslick"
          }
        ]
      };
  
      slider.slick(settings);

      slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
          slider.find(".slick-slide").removeClass('works');
          slider.find('.slick-current').addClass('works');
          slider.find('.slick-current').toggleClass("hovered");
       });
  
      $(window).on("resize", function () {
        if ($(window).width() > $breakpoint) {
  
          return;
        }
        if (!slider.hasClass("slick-initialized")) {
          return slider.slick(settings);
        }
      });
  }

  $(window).on('scroll', function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos > 0) {
        $('#header').addClass('bg');
    } else {
        $('#header').removeClass('bg');
    }
  });
  var navHeight = $('.mainHeader').outerHeight();
  $('a[href^="#"]').on('click', function (e) {
    var target = this.hash,
        $target = $(target);
    $('html, body').animate({
        'scrollTop': $target.offset().top - navHeight
    }, 500, function () {
        window.location.hash = target;
    });
  });


  function gridAdjust(targertSteing) {
	var targertHight = $(targertSteing);
	  targertHight.css('height', 'auto');
	   var heights = [];
	   targertHight.each(function() {
		 var elem = $(this);
		 var height = elem.outerHeight();
		 heights.push(height);
	   });
	   heights = heights.sort(function(a, b) {
		 return b - a
	   });
	   var tallest = heights[0];
	   targertHight.css('height', tallest + 'px');
  }


  $('.info-optimize-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    fade:false,
    pauseOnHover: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendArrows: $('.info_optimize_arrows'),
            prevArrow: '<div class="slick-nav news__arrow news__arrow_dir_left"><span class="optimize-left-arrow"><img src="./assets/img/info-slider-arrow.png" width="60px"></span></div>',
            nextArrow: '<div class="slick-nav news__arrow news__arrow_dir_right"><span class="optimize-right-arrow"><img src="./assets/img/info-slider-arrow.png" width="60px" style="transform: rotate(180deg);"></span></div>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            centerMode: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerMode: false,
        }
      }
    ]
  });