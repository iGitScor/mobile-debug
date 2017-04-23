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
    "#mobile-debug { display: none; }\n#mobile-debug:target {\n  display: block;\n  position: fixed;\n  z-index: 999999999;\n  top: 5px;\n  left: 5px;\n  bottom: 5px;\n  right: 5px;\n  margin: 0px;\n  padding: 10px;\n  color: #333;\n  background-color: rgba(255, 255, 255, 0.95);\n  overflow: scroll;\n  font-family: 'monospace','Lucida Console','Lucida Sans Unicode','Verdana';\n  border-radius: 0px 0px 10px 10px;\n  box-shadow: 0px 0px 10px #000000;\n  -webkit-transition: .2s;\n  transition: .2s\n}\n\n#mobile-debug .title { font-size: 18px; }\n#mobile-debug span, #mobile-debug p { font-size: 12px; margin: 0; }\n#mobile-debug .input { color: #D64141; }\n#mobile-debug .value { color: #404040; }\n#mobile-debug .value.warn { color: #D0A889; }\n",
    undefined
  );

  /**
 ********** DOM console **********
 **/

  var node = document.createElement("div");
  node.id = "mobile-debug";
  node.innerHTML = '<p class="title">Debug console</p>';
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
      debugDate.innerHTML = now;
      debugDate.classList.add("input");
      document.getElementById("mobile-debug").appendChild(debugDate);

      var debugValue = document.createElement("p");
      debugValue.innerHTML = args[iterator];
      debugValue.classList.add("value");
      Array.foreach(classes, function(cssClass) {
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
      "JavaScript error: " + message + " on line " + linenumber + " for " + url;
    console.log(debugMessage);
  };
})();
