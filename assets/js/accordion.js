(function ($) {
  // Whole-script strict mode syntax
  "use strict";

  var ContentChecker = $(".aae-accordion");
  if (ContentChecker.length > 0) {
    $(".aae-accordion__item_content").hide();
    var acParent = $(".aae-accordion__item");
    var showAc = $(".aae-accordion__item.show");
    $(".aae-accordion__item_title").on("click", function (event) {
      event.preventDefault();
      var acNew = $(this).attr("data-collapse-title");
      // var acNew = AcCurrent.replace('#', '');
      $(this).parent(".aae-accordion__item").toggleClass("show");
      var findAccordion = $(document)
        .find("[data-collapse-panel='" + acNew + "']")
        .slideToggle();
      $(this)
        .parent(".aae-accordion__item")
        .siblings()
        .children("[data-collapse-panel]")
        .slideUp();
      $(this).parent(".aae-accordion__item").siblings().removeClass("show");
    });
    if ($(".aae-accordion__item").hasClass("show")) {
      showAc.find("[data-collapse-panel]").slideDown();
    }
    $(".show-collapse").slideDown();
  }
})(jQuery);
