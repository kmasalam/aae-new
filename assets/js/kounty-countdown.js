/*
Plugin Name : kounty JQuery Countdown Premium Plugin
Author: codeexposer;
version: 1.0;
Release Date:8/2/2018

*/



$.fn.kounty = function() {
    jQuery.fn.hasAttr = function (name) {
        return this.attr(name) !== undefined && this.attr(name) !== "" && this.attr(name).replace(/^\s+|\s+$/g, "").length != 0 ;
      };
      function getresult(parent, cattr1,cattr2) {
        if (parent.hasAttr(cattr1) && parent.hasAttr(cattr2)) {
          var result = `<span class='aae-countdown__label'>${$.trim(parent.attr(
            cattr1
          ))}</span>
          <span class='aae-countdown__seperator'>${$.trim(parent.attr(cattr2))}</span>`;
          return result;
        } else if (parent.hasAttr(cattr1)) {
          var result = `<span class='aae-countdown__label'>${$.trim(parent.attr(
            cattr1
          ))}</span>`;
          return result;
        } else if (parent.hasAttr(cattr2)) {
          var result = `<span class='aae-countdown__seperator'>${$.trim(parent.attr(
            cattr2
          ))}</span>`;
          return result;
        } else {
          return false;
        }
      }
    return this.each(function() {
        var DayLabel,HourLabel,MinuteLabel,SecondLabel;
      var countContainer = $(this),
        myTimer = countContainer.attr("data-timer-date"),
        countDownDate = new Date(myTimer).getTime(),
        countMessage = countContainer.attr("data-countdown-message"),
        countlabel = $(this).attr("data-countdown-seperator");
      DayLabel = getresult(countContainer, "data-day-label",'data-countdown-seperator');
      HourLabel = getresult(countContainer, "data-hour-label",'data-countdown-seperator');
      MinuteLabel = getresult(countContainer, "data-min-label",'data-countdown-seperator');
      SecondLabel = getresult(countContainer, "data-sec-label",'data-countdown-seperator');
      console.log( DayLabel);
      var sTimerfunction = setInterval(function () {
        var cDate = new Date().getTime();
        var kountdis = countDownDate - cDate;
        var days = Math.floor(kountdis / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (kountdis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((kountdis % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((kountdis % (1000 * 60)) / 1000);
        DayLabel ? countContainer.children(".aae-countdown__days").html(days).append(DayLabel): countContainer.children(".aae-countdown__days").html(days);
        HourLabel ? countContainer.children(".aae-countdown__hours").html(hours).append(HourLabel): countContainer.children(".aae-countdown__hours").html(hours);
        MinuteLabel ? countContainer.children(".aae-countdown__minutes").html(minutes).append(MinuteLabel): countContainer.children(".aae-countdown__minutes").html(minutes);
        SecondLabel ? countContainer.children(".aae-countdown__seconds").html(seconds).append(SecondLabel): countContainer.children(".aae-countdown__seconds").html(seconds);
        if (kountdis < 0) {
          clearInterval(sTimerfunction);
          countContainer.html(countMessage);
          countContainer.addClass("countdown-finished");
        } else {
          countContainer.removeClass("countdown-finished");
        }
      }, 1000);
    });
 
};