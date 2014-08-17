(function ($) {
  'use strict';
  var hover, disableHoverEvents, enableHoverEvents, timer;

  disableHoverEvents = function disableHoverEvents(element) {
    element.style.pointerEvents = 'none';
  };

  enableHoverEvents = function enableHoverEvents(element) {
    element.style.pointerEvents = 'auto';
  };

  $.fn.dheos = function dheos(config) {
    var element;

    element = $(this);

    config || (config = {
      timeout: 132
    });

    window.addEventListener('scroll', function () {
      clearTimeout(timer);
      disableHoverEvents(element[0]);
      timer = setTimeout(function () {
        enableHoverEvents(element[0]);
      }, config.timeout);
    }, false);
  };
}(jQuery));
