(function ($) {
  // Whole-script strict mode syntax
  "use strict";

  $(window).on("load", function () {
    // Progressbar
    jQuery(".aae-is-progressbar-line").each(function () {
      const __this = jQuery(this);
      let aaeProgressBar, proDur;
      aaeProgressBar = __this.attr("data-aae-parcent");
      proDur = __this.attr("data-aae-duration");
      console.log("animation duration", proDur);
      if (Math.floor(proDur) == proDur && $.isNumeric(proDur) && proDur != "") {
        proDur = __this.attr("data-aae-duration");
        proDur = proDur * 1000;
      } else {
        proDur = 2000;
      }

      function progressbarFunction() {
        __this.find(".aae-progressbar__line").animate(
          {
            width: aaeProgressBar + "%",
          },
          proDur
        );

        __this.find(".aae-progressbar__parcent").animate(
          {
            left: aaeProgressBar + "%",
          },
          {
            duration: proDur,
            step: function (now, fx) {
              var data = Math.round(now);
              __this.find(".aae-progressbar__parcent").html(data + "%");
            },
          }
        );
      }

      var self = __this;
      __this.waypoint({
        offset: "100%",
        handler: function () {
          progressbarFunction();
          this.destroy();
        },
      });
    });

    $(".aae-is-progressbar-circle").each(function () {
      const __this = jQuery(this);
      let percentageProgress, proDur, aaeProgressParcent;
      percentageProgress = __this.attr("data-aae-parcent");
      var percentageRemaining = 100 - percentageProgress;
      proDur = __this.attr("data-aae-duration");
      var svgCircle = `<?xml version="1.0" encoding="utf-8"?>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;" xml:space="preserve">
      <circle cx="100" cy="100" r="84" class="aae-progressbar-circle"/>
      </svg>`;
      aaeProgressParcent = __this.find(".aae-progressbar__parcent");
      __this.find(".aae-progressbar__container").append(svgCircle);
      __this.find(".aae-progressbar__line").remove();
      var $circle = __this.find(".aae-progressbar-circle");

      if (Math.floor(proDur) == proDur && $.isNumeric(proDur) && proDur != "") {
        proDur = __this.attr("data-aae-duration");
        proDur = proDur * 1000;
      } else {
        proDur = 2000;
      }

      //Calcule la circonférence du cercle
      var radius = $circle.attr("r");
      var diameter = radius * 2;
      var circumference = Math.round(Math.PI * diameter);

      //Calcule le pourcentage d'avancement
      var percentage = (circumference * percentageRemaining) / 100;

      $circle.css({
        "stroke-dasharray": circumference,
        "stroke-dashoffset": percentage,
      });

      $circle
        .css({
          "stroke-dashoffset": circumference,
        })
        .animate(
          {
            "stroke-dashoffset": percentage,
          },
          proDur
        );

      //Animation du texte (pourcentage)
      jQuery({ Counter: 0 }).animate(
        { Counter: percentageProgress },
        {
          duration: proDur,
          step: function () {
            aaeProgressParcent.text(Math.ceil(this.Counter) + "%");
          },
        }
      );
    });
  });
})(jQuery);
