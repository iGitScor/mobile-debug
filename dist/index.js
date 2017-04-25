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
    "@import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow');\n\n/**\n * Counter\n */\n\n#mobile-debug-counter {\n  position: fixed;\n  z-index: 888888888;\n  bottom: 0;\n  right: 0;\n  background-color: #31363F;\n  color: #D9DCE1;\n  display: inline-block;\n  font-family: sans-serif;\n}\n\n#mobile-debug-counter span {\n  display: inline-block;\n  padding: 10px;\n}\n\n#mobile-debug-counter span.warn { background-color: #AC7B1F; }\n#mobile-debug-counter span.error { background-color: #CF3C34; }\n\n\n/**\n * Console\n */\n\n#mobile-debug { display: none; }\n#mobile-debug:target {\n  display: block;\n  position: fixed;\n  z-index: 999999999;\n  top: 5px;\n  left: 5px;\n  bottom: 5px;\n  right: 5px;\n  margin: 0px;\n  padding: 10px;\n  color: #333;\n  background-color: rgba(255, 255, 255, 0.95);\n  overflow: scroll;\n  font-family: 'PT Sans Narrow', sans-serif;\n  box-shadow: 0px 0px 10px #000000;\n}\n\n#mobile-debug a {\n  text-decoration: none;\n  border: 1px solid black;\n  padding: 2px;\n  color: black;\n  margin-bottom: 5px;\n  display: inline-block;\n}\n\n#mobile-debug .title { font-size: 20px; }\n\n#mobile-debug span,\n#mobile-debug p {\n  font-size: 16px;\n  margin: 0;\n}\n\n#mobile-debug p.input {\n  color: #417ad6;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n#mobile-debug .value {\n  color: #404040;\n  margin-bottom: 10px;\n}\n\n#mobile-debug .warn.warn { color: #D0A889; }\n\n#mobile-debug .error.error {\n  color: #CF3C34;\n  font-weight: bold;\n}\n",
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

  var button = document.createElement("a");
  button.href = "#mobile-debug";
  button.id = "mobile-debug-counter";
  button.innerHTML =
    '<span class="error">X</span><span class="warn">X</span><span>X</span>';
  document.body.appendChild(button);

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
      '<span class="error">&times;</span> JavaScript error: ' +
      message +
      " on line " +
      linenumber +
      " for " +
      url;
    console.log(debugMessage);
  };
})();
