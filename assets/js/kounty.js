// Kounty Plugin
$.fn.kounty = function () {
  return this.each(function () {
    jQuery.fn.hasAttr = function (a) {
      return this.attr(a) !== void 0 && "" !== this.attr(a);
    };
    var a, b, c, d;
    jQuery(this).hasAttr("data-day-label") &&
      ((a = jQuery(this).attr("data-day-label")),
      (a = "<span>" + a + "</span>")),
      jQuery(this).hasAttr("data-hour-label") &&
        ((b = jQuery(this).attr("data-hour-label")),
        (b = "<span>" + b + "</span>")),
      jQuery(this).hasAttr("data-min-label") &&
        ((c = jQuery(this).attr("data-min-label")),
        (c = "<span>" + c + "</span>")),
      jQuery(this).hasAttr("data-sec-label") &&
        ((d = jQuery(this).attr("data-sec-label")),
        (d = "<span>" + d + "</span>"));
    var e = $(this),
      f = e.attr("data-timer-date"),
      g = new Date(f).getTime(),
      h = e.attr("data-countdown-message"),
      i = $(this).attr("data-countdown-seperator"),
      j = setInterval(function () {
        var f = new Date().getTime(),
          k = g - f,
          l = Math.floor(k / 86400000),
          m = Math.floor((k % 86400000) / 3600000),
          n = Math.floor((k % 3600000) / 60000),
          o = Math.floor((k % 60000) / 1e3);
        "dots" == i &&
          (e.addClass("aae-countdown__dots"),
          e.children(".aae-countdown__days").html(l),
          e.children(".aae-countdown__hours").html(m),
          e.children(".aae-countdown__minutes").html(n),
          e.children(".aae-countdown__seconds").html(o)),
          "label" == i
            ? (e.addClass("aae-countdown__label"),
              e.children(".aae-countdown__days").html(l).append(a),
              e.children(".aae-countdown__hours").html(m).append(b),
              e.children(".aae-countdown__minutes").html(n).append(c),
              e.children(".aae-countdown__seconds").html(o).append(d))
            : (e
                .children(".aae-countdown__days")
                .html(l)
                .append("<span> days </span>"),
              e
                .children(".aae-countdown__hours")
                .html(m)
                .append("<span> hours </span>"),
              e
                .children(".aae-countdown__minutes")
                .html(n)
                .append("<span> minutes </span>"),
              e
                .children(".aae-countdown__seconds")
                .html(o)
                .append("<span> seconds </span>")),
          0 > k
            ? (clearInterval(j),
              e.html(h),
              e.addClass("aae-countdown__finished"))
            : e.removeClass("aae-countdown__finished");
      }, 1e3);
  });
};
