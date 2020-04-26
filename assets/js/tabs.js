(function ($) {
  // Whole-script strict mode syntax
  "use strict";

  var ContentChecker = $(".aae-tabs");
  if (ContentChecker.length > 0) {
    jQuery(".aae-tabs__content:not('.active')").hide();
    jQuery(document).on("click", ".aae-tabs_item", function (e) {
      let __this, result, shower;
      __this = jQuery(this);
      e.preventDefault();
      __this.addClass("active");
      __this.siblings().removeClass("active");
      result = jQuery(this).attr("href");
      result = result.replace("#", "");
      jQuery(".aae-tabs__content").find(`[id='jQuery{result}']`).show();
      console.log(jQuery(".aae-tabs__content[id*=" + result + "]"));
      shower = jQuery(".aae-tabs__content[id*=" + result + "]").show();
      shower = jQuery(".aae-tabs__content[id*=" + result + "]").addClass(
        "active"
      );
      shower.siblings().hide();
      shower.siblings().removeClass("active");
    });
  }
})(jQuery);
