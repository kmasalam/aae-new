(function ($) {
  // Whole-script strict mode syntax
  "use strict";

  $(window).on("load", function () {
    // isotop initialize
    var aae_is_Filterable = $(".aae-post-grid-is-filterable");
    if (aae_is_Filterable.length) {
      $(".aae-post-grid-is-filterable").each(function () {
        var aae_filter_grid = $(".aae-filter_grid");
        var aae_filter_list = $(".aae-filterable li");
        $(this).find(aae_filter_grid).isotope({
          itemSelector: ".aae-filter_grid_item",
        });
        $(this)
          .find(aae_filter_list)
          .on("click", function () {
            $(this).addClass("aae-active").siblings().removeClass("aae-active");
            var filterValue = $(this).attr("data-aae-filter");
            $(this)
              .closest(".aae-filterable")
              .siblings(".aae-filter_grid")
              .isotope({
                filter: filterValue,
              });
          });
      });
    }
  });
})(jQuery);
