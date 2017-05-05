(function() {
  "use strict";
  function __$styleInject(css, returnValue) {
    if (typeof document === "undefined") {
      return returnValue;
    }
    css = css || "";
    var head = document.head || document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    style.type = "text/css";
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
    return returnValue;
  }

  __$styleInject(
    '@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow");#mobile-debug-counter{position:fixed;z-index:1;bottom:0;right:0;background-color:#31363f;color:#d9dce1;display:inline-block;font-family:sans-serif}#mobile-debug-counter span{display:inline-block;padding:10px}#mobile-debug-counter span.warn{background-color:#ac7b1f}#mobile-debug-counter span.error{background-color:#cf3c34}#mobile-debug{display:none}#mobile-debug:target{display:block;position:fixed;z-index:2;top:5px;left:5px;bottom:5px;right:5px;margin:0;padding:10px;color:#333;background:url(../logo.png) hsla(0,0%,100%,.95) no-repeat right 10px;background-size:48px;overflow:scroll;font-family:PT Sans Narrow,sans-serif;box-shadow:0 0 10px #000}#mobile-debug a{text-decoration:none;border:1px solid #000;padding:2px;color:#000;margin-bottom:5px;display:inline-block}#mobile-debug .title{font-size:20px}#mobile-debug p,#mobile-debug span{font-size:16px;margin:0}#mobile-debug p.input{color:#417ad6;font-weight:700;font-size:14px}#mobile-debug .value{color:#404040;margin-bottom:10px}#mobile-debug .warn.warn{color:#d0a889}#mobile-debug .error.error{color:#cf3c34;font-weight:700}',
    undefined
  );

  /**
 ********** DOM console **********
 **/

  var node = document.createElement("div");
  node.id = "mobile-debug";
  node.innerHTML =
    '<p><a href="#">&times; Close</a></p><p class="title">Debug console</p>';
  document.body.appendChild(node);

  /**
 ********** Console handler **********
 **/

  var baseLogFunction = console.log;
  var baseWarnFunction = console.warn;

  function handleLog(logArguments, classes) {
    var args = Array.prototype.slice.call(logArguments);

    var _loop = function _loop() {
      var now = new Date();

      var debugDate = document.createElement("p");
      debugDate.innerHTML =
        now.getHours() + "h" + ("0" + now.getMinutes()).slice(-2);
      debugDate.classList.add("input");
      document.getElementById("mobile-debug").appendChild(debugDate);

      var debugValue = document.createElement("p");
      debugValue.innerHTML = args[iterator];
      debugValue.classList.add("value");
      classes.forEach(function(cssClass) {
        debugValue.classList.add(cssClass);
      });
      document.getElementById("mobile-debug").appendChild(debugValue);
    };

    for (var iterator = 0; iterator < args.length; iterator += 1) {
      _loop();
    }
  }

  console.warn = function() {
    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    baseWarnFunction.apply(console, args);
    handleLog(args, ["warn"]);
  };

  console.log = function() {
    for (
      var _len2 = arguments.length, args = Array(_len2), _key2 = 0;
      _key2 < _len2;
      _key2++
    ) {
      args[_key2] = arguments[_key2];
    }

    baseLogFunction.apply(console, args);
    handleLog(args, []);
  };

  window.onerror = function(message, url, linenumber) {
    var debugMessage =
      '<span class="error">&times;</span>JavaScript error: ' +
      message +
      " on line " +
      linenumber +
      " for " +
      url;
    console.log(debugMessage);
  };

  var button = document.createElement("a");
  button.href = "#mobile-debug";
  button.id = "mobile-debug-counter";
  button.innerHTML =
    '<span class="error">X</span><span class="warn">X</span><span>X</span>';
  document.body.appendChild(button);
})();
