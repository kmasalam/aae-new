(function ($) {
  // Whole-script strict mode syntax
  "use strict";

  jQuery.fn.hasAttr = function (name) {
    return this.attr(name) !== undefined && this.attr(name) !== "" && this.attr(name).replace(/^\s+|\s+$/g, "").length != 0 ;
  };
  function aae_get_attr(parent,param){
        if(parent.hasAttr(param)){
           return parent.attr(param);
        }
    }
  var ElementChecker = $(".aae-post-carousel__container");
  if (ElementChecker.length) {
    ElementChecker.each(function () {
        
        var slidesToShow,cElement,arrows,autoplaySpeed,autoplay,dots;
        cElement = $(this);
        slidesToShow = aae_get_attr($(this),'data-carousel-item');
        arrows = aae_get_attr($(this),'data-carousel-nav');
        dots = aae_get_attr($(this),'data-carousel-dots');
        autoplaySpeed = aae_get_attr($(this),'data-carousel-speed');
        autoplay = aae_get_attr($(this),'data-carousel-autoplay');
      jQuery(this).not(".slick-initialized").slick({
        slidesToShow: slidesToShow ? parseInt(slidesToShow) : 1,
        arrows: arrows ? true : false,
        nextArrow: arrows ? '<button type="button" class="slick-next slick-arrow"> <i class="fas fa-chevron-right"></i></button>' : null,
            prevArrow: arrows ? '<button type="button" class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i></button>' : null ,
        dots: dots ? true : false,
        autoplay: autoplay ? autoplay : false,
        autoplaySpeed: autoplaySpeed ? parseInt(autoplaySpeed) : 3000,
      });
    });
  }
})(jQuery);
