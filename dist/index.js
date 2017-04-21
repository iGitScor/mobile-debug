/**
  ********** DOM console **********
  **/

var node = document.createElement('div');
node.id = 'mobile-debug';
node.innerHTML = '<p class="title">Debug console</p>';
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
    document.getElementById('mobileDebug').appendChild(debugDate);
    var debugValue = document.createElement('p');
    debugValue.innerHTML = args[index];
    debugValue.classList.add('value');
    debugValue.classList.add('warn');
    document.getElementById('mobileDebug').appendChild(debugValue);
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
    document.getElementById('mobileDebug').appendChild(debugDate);
    var debugValue = document.createElement('p');
    debugValue.innerHTML = args[index];
    debugValue.classList.add('value');
    document.getElementById('mobileDebug').appendChild(debugValue);
  }
};

window.onerror = function errorHandler(message, url, linenumber) {
  console.log('JavaScript error: ' + message + ' on line ' +
        linenumber + ' for ' + url);
};
