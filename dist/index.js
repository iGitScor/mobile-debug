/**
  ********** DOM console **********
  **/

var node = document.createElement('div');
node.id = 'mobile-debug';
node.innerHTML = `
  <style>
  #mobile-debug { display: none; }
  #mobile-debug:target {
    display: block;
    position: fixed;
    z-index: 999999999;
    top: 5px;
    left: 5px;
    bottom: 5px;
    right: 5px;
    margin: 0px;
    padding: 10px;
    color: #333;
    background-color: rgba(255, 255, 255, 0.95);
    overflow: scroll;
    font-family: 'monospace','Lucida Console','Lucida Sans Unicode','Verdana';
    border-radius: 0px 0px 10px 10px;
    box-shadow: 0px 0px 10px #000000;
    transition: .2s
  }

  #mobile-debug .title { font-size: 18px; }
  #mobile-debug span, #mobile-debug p { font-size: 12px; margin: 0; }
  #mobile-debug .input { color: #D64141; }
  #mobile-debug .value { color: #404040; }
  #mobile-debug .value.warn { color: #D0A889; }
  </style>
  <p class="title">Debug console</p>`;
document.body.appendChild(node);

/**
  ********** Console handler **********
  **/

var baseLogFunction = console.log;
var baseWarnFunction = console.warn;
window.debug = [];

console.warn = function _warn() {
  baseWarnFunction.apply(console, arguments);
  var args = Array.prototype.slice.call(arguments);
  for (var index = 0; index < args.length; index += 1) {
    var now = new Date();
    window.debug.push({ input: new Date(), value: args[index] });
    var debugDate = document.createElement('p');
    debugDate.innerHTML = now;
    debugDate.classList.add('input');
    document.getElementById('mobile-debug').appendChild(debugDate);
    var debugValue = document.createElement('p');
    debugValue.innerHTML = args[index];
    debugValue.classList.add('value');
    debugValue.classList.add('warn');
    document.getElementById('mobile-debug').appendChild(debugValue);
  }

};

console.log = function _log() {
  baseLogFunction.apply(console, arguments);

  var args = Array.prototype.slice.call(arguments);
  for (var index = 0; index < args.length; index += 1) {
    var now = new Date();
    window.debug.push({ input: now, value: args[index] });
    var debugDate = document.createElement('p');
    debugDate.innerHTML = now;
    debugDate.classList.add('input');
    document.getElementById('mobile-debug').appendChild(debugDate);
    var debugValue = document.createElement('p');
    debugValue.innerHTML = args[index];
    debugValue.classList.add('value');
    document.getElementById('mobile-debug').appendChild(debugValue);
  }
};

window.onerror = function errorHandler(message, url, linenumber) {
  console.log('JavaScript error: ' + message + ' on line ' +
        linenumber + ' for ' + url);
};
