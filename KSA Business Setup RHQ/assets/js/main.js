$(window).on('load', function() {
    gridAdjust(".info-media-mobile-slider .info-media-content");
    gridAdjust(".info-ksa-mobile-slider .info-media-content");
    gridAdjust(".info-card-mobile-slider .info-card");
});

$(window).resize(function() {
  gridAdjust(".info-media-mobile-slider .info-media-content");
  gridAdjust(".info-ksa-mobile-slider .info-media-content");
  gridAdjust(".info-card-mobile-slider .info-card");
});

$(window).on('load', function() {
  gridAdjust(".info-media-mobile-slider .info-media-content");
  gridAdjust(".info-ksa-mobile-slider .info-media-content");
  gridAdjust(".info-card-mobile-slider .info-card");

//     if ($(window).width() < 767) {
//       gridAdjust(".features-card .info-list-item");
//    }
  });

$(document).ready(function() {
    mobileSlider(".info-media-mobile-slider", 1, true, false, 767);
    mobileSlider(".info-card-mobile-slider", 1, true, false, 767);
    mobileSlider(".info-ksa-mobile-slider", 1, true, false, 767);
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
      // slider.on('laod', function(event, slick, currentSlide, nextSlide){
      //     let actives = slider.find(".slick-active").addClass('balaraju');
      // });
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



  function gridAdjust(targertSteing) {
	// if ($(window).width() < 767) {
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
	// }
  }