$(window).on('load', function() {
  

  // Apply only if screen width is 768px or above
  if ($(window).width() >= 768) {
    gridAdjust(".info-grid .info-card-body");
    gridAdjust(".info-grid .info-gradient-card");
    gridAdjust(".info-ul-timeline .info-li-content");
  }
});

$(window).resize(function() {
  
  
  // Apply only if screen width is 768px or above
  if ($(window).width() >= 768) {
    gridAdjust(".info-grid .info-card-body");
    gridAdjust(".info-grid .info-gradient-card");
    gridAdjust(".info-ul-timeline .info-li-content");
  }
});

$(document).ready(function() {


  // Apply only if screen width is 768px or above
  if ($(window).width() >= 768) {
    gridAdjust(".info-grid .info-card-body");
    gridAdjust(".info-grid .info-gradient-card");
    gridAdjust(".info-ul-timeline .info-li-content");
  }


  mobileSlider(".", 1, 1, false, true, false, 767);
});


var mobileSlider = ($slidername, $slidesToShow, $slidesToScroll, $dots, $arrows, $autoplay,$breakpoint) => {

    var slider = $($slidername);
      var settings = {
        mobileFirst: true,
        slidesToShow: $slidesToShow,
        slidesToScroll: $slidesToScroll,
        dots: $dots,
        arrows: $arrows,
        autoplay: $autoplay,
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
