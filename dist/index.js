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

  window.mDebug = {};

  window.mDebug.push = function() {
    var _arguments = arguments;

    var _loop = function _loop(debugIndex) {
      var entry = _arguments.length <= debugIndex
        ? undefined
        : _arguments[debugIndex];

      var debugDate = document.createElement("p");
      debugDate.innerHTML = entry.date;
      debugDate.classList.add("input");
      document.getElementById("mobile-debug").appendChild(debugDate);

      var debugValue = document.createElement("p");
      debugValue.innerHTML = entry.value;
      debugValue.classList.add("value");
      entry.type.forEach(function(cssClass) {
        debugValue.classList.add(cssClass);
      });

      document.getElementById("mobile-debug").appendChild(debugValue);
    };

    for (var debugIndex = 0; debugIndex < arguments.length; debugIndex += 1) {
      _loop(debugIndex);
    }
  };

  /**
 ********** Console handler **********
 **/

  var baseLogFunction = console.log;
  var baseWarnFunction = console.warn;
  var baseErrorFunction = console.error;

  function handleLog(logArguments) {
    var classes = arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : [];

    var args = Array.prototype.slice.call(logArguments);
    for (var iterator = 0; iterator < args.length; iterator += 1) {
      var now = new Date();

      window.mDebug.push({
        date: now.getHours() + "h" + ("0" + now.getMinutes()).slice(-2),
        value: args[iterator],
        type: classes
      });
    }
  }

  console.error = function() {
    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    baseErrorFunction.apply(console, args);
    handleLog(args, ["error"]);
  };

  console.warn = function() {
    for (
      var _len2 = arguments.length, args = Array(_len2), _key2 = 0;
      _key2 < _len2;
      _key2++
    ) {
      args[_key2] = arguments[_key2];
    }

    baseWarnFunction.apply(console, args);
    handleLog(args, ["warn"]);
  };

  console.log = function() {
    for (
      var _len3 = arguments.length, args = Array(_len3), _key3 = 0;
      _key3 < _len3;
      _key3++
    ) {
      args[_key3] = arguments[_key3];
    }

    baseLogFunction.apply(console, args);
    handleLog(args);
  };

  window.onerror = function(message, url, linenumber) {
    var debugMessage =
      "Error: " + message + " on line " + linenumber + " for " + url;
    handleLog([debugMessage], ["error"]);
  };

  __$styleInject(
    '@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow");#mobile-debug-counter{position:fixed;z-index:888888888;bottom:0;right:0;background-color:#31363f;color:#d9dce1;display:inline-block;font-family:sans-serif}#mobile-debug-counter span{display:inline-block;padding:10px}#mobile-debug-counter span.warn{background-color:#ac7b1f}#mobile-debug-counter span.error{background-color:#cf3c34}#mobile-debug{display:none}#mobile-debug:target{display:block;position:fixed;z-index:999999999;top:5px;left:5px;bottom:5px;right:5px;margin:0;padding:10px;color:#333;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MURCNkQzN0EyMTBBMTFFN0I0QUFGMjM4RDAyMjE5NzciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MURCNkQzNzkyMTBBMTFFN0I0QUFGMjM4RDAyMjE5NzciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGREFCMTgwM0Y4MUMxMUU2QjZGNzgxNjZCMjFGM0JGMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGREFCMTgwNEY4MUMxMUU2QjZGNzgxNjZCMjFGM0JGMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvGm3B8AAAKgUExURQAAAFxcXAD9AOHh4VlZWTIyMv4AEnx8fLa2tsTExN3d3S0tLSQkJEtLSyMjIycnJ+zs7AkJCTQ0NNHR0QgICP/J0AD9AAD9AMvLy/T09OLi4v39/bOzs/92hVpaWu7u7ldXV0lJSf+cqFhYWIv/kvn5+YT/i2L/a4L/igD9AP+Xo2BgYP3//fDw8P+7wt7e3t//4YCAgMn/zP+/xcj/y/X19fv7+9TU1Ovr6/Pz83V1dcPDw/z8/Fv+Zf+VoV7/aI6Ojm1tbVJSUuH/405OTnD/ejo6Omv/dAoKCunp6UBAQP4MJ8H/xqn/r/+Fk5iYmB4eHi4uLq6urlNTU319fb+/v/6MmZKSkmb/cCYmJtn/2//Q1tP/1re3t/b29ubm5qD/pv+apuT/5YaMhtPT0zExMQD9B29vb5ycnCAgIP98ivD/8RMTE6b/rOPj4/r/+mlpaZD/l3z/hf4SKwMDA0pKSmpqaqf/rYD+iIH/iY+PjwD9AMT/yP9gcnT/ffr6+nBwcP9tfTIzMsnJyf4UL/4AF4n/kJWVlaCgoN7/4LW1tfHx8SkpKX3/hpz9ojk5OTMzM/+Wo0v+VxwcHAD9AP9Xaf+5wZeXl5+wof+Kl03+WUhISP+fqgD9ANra2rCwsIqKiv+jrqf+rTU1Ndvb2+Xl5f9xgVVVVf4WMMjIyHeFeJD6ltzc3AD9ALv/v15eXq2trf4HIwD9AFX+YP4RKk1NTc3NzTc3N+rq6sX/yQICAv4GIqurq2T/bisrK//FzBEREXh4eAwMDGxsbA4ODv+psxgYGBISEgsLC/4TLLX/usv/zlZWVv+DkM7/0f4JJP+ttv9neOD/4gD9AP+Om6qqqv/EyyEhIXr/goaGhnFxcYGDgSIiIv+PnNbW1v///7RbquQAAADgdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8At6MSngAAA1xJREFUeNrs2+dT1EAUAPDnIEUPFeGYAUGqlEEBEekgVan23nvvvYy99zp2x951LGPvvXdjb/uvmN1wMMfcHbmdze0MvPchyeaSe7+77NvNhwSI5AAEIAABuo66+9bkdMzeLQxwsAy4wrReDMCnBMD8x9vZeKgS0oQA9gM8KXX+4m7IA5iUIgAQANCar38lAfQVAPgF4MYHWPIYLgoARAKc4CyxrRAmABAC0IIT4AuRAgAN+AHu0FAMgHeU6yQKkO/JF89FAfijrgCyGvPFfVGAKM5OeEMUwE12GSIAAQhAgD1AwkC22pUgCdBlZrm/ujpw9fJHKYBPHmr4kzi6+iIDMIFmftWSLj0i6I4h6T7W0R0KqrbTo8Rfgg4elvjG2ofNza3jNsyq2jZ7GdAJIz6w9CsfaM1eDu9NehhRhjsZYG9l66dDQLABgLg7DHDaX2s+cgj4Kh7w19IFViWzdtdmNcIMT6sbvYUDWP8vX1ZdBa4uw0XaODCcrvpIGQnVvyBZq8ZnkuaCk0fY6t02nI4RgAAE1HtA8Ty5gFaKslkHINUowHxFjXO1Ao4HCQdMfk+X02l+5ai6VRrgZx0bIdzPLyCUHZyRKPwSdFaUEYREs/wVdEeS7XuxPHZ0doZogHrllTETh7H87dme37YBSw3qhPuUqmin7RlpG7AjyKAqyK2Rn5y1DZhmWBle0fLfsrT3LPe1jhJ44esebuA4EEPzL5Q5EuZa+l/tgEBjRsKcuTrngvhUyZNREE7HrgekxcsFJAZK/geysQ8gwJWA7TFyAR0VJVYmoB+dlKNlAFa/rvz9alxQt6a6GKDelb4h5B7Lv07CJSimiQdpd+WFMjphTvVdcVtXl2Ebtoy15C8kcgBksePf74Iy/EHzD5A5Em5SlM9yh+IZFTgZIQABCEAAAuoHgDM/2SIKcKkRX/THZ0pFAdZ68YV3nXmwGccB+4DgovAFMgH/HDwg5BLAGgo4JRFwiAI8DQaEAEyx91nUNQDTTbunHhPyhkUYwFD7n17PcnDqaCHvmGQCnOerwkCzjheEageMAujJB8gHGCcAQDtBEcdQFDoWYDwRAUjppnb1702djZeg6/UcPRNNaAHfXFx2hogBELIis4nTMWewrq/GVz4RgAAE/BdgAN4nPE81y23tAAAAAElFTkSuQmCC") hsla(0,0%,100%,.95) no-repeat right 10px;background-size:48px;overflow:scroll;font-family:PT Sans Narrow,sans-serif;box-shadow:0 0 10px #000}#mobile-debug a{text-decoration:none;border:1px solid #000;padding:2px;color:#000;margin-bottom:5px;display:inline-block}#mobile-debug .title{font-size:20px}#mobile-debug p,#mobile-debug span{font-size:16px;margin:0}#mobile-debug p.input{color:#417ad6;font-weight:700;font-size:14px}#mobile-debug .value{color:#404040;margin-bottom:10px}#mobile-debug .warn.warn{color:#d0a889}#mobile-debug .error.error{color:#cf3c34;font-weight:700}',
    undefined
  );

  // eslint-disable-next-line
  // Initialize watcher

  // Initialize log catcher
  // Initialize error catcher
  // Load style
  // Initialize console
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
})();
