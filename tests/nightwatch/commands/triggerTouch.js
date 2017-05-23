/* eslint-env node */

/* eslint-disable */

exports.command = function (selector, type, nbTouches, callback) {
  var _this = this;

  _this.execute(function (nwSelector, eventType, fingers) {
    var domElement = document.querySelector(nwSelector);
    var eventTouch = {
      identifier: Date.now(),
      clientX: 0,
      clientY: 0,
      target: domElement,
    };

    var touchObj = new Touch(eventTouch);

    var touches = [];
    for (var i = 0; i < fingers; i++) {
      touches.push(touchObj);
    }

    var event = new TouchEvent(eventType || 'touchstart', {
      view: window,
      bubbles: true,
      cancelable: true,
      touches,
      changedTouches: touches,
      targetTouches: [],
    });

    domElement.dispatchEvent(event);

    return true;
  },

  [selector, type, nbTouches],

  function (result) {
    if (typeof callback === 'function') {
      callback.call(_this, result);
    }
  });

  return this;
};
