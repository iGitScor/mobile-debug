import '../display/mobile-debug.css';

// eslint-disable-next-line
'use strict';

/**
 ********** DOM console **********
 **/

const node = document.createElement('div');
node.id = 'mobile-debug';
node.innerHTML = '<p><a href="#">&times; Close</a></p><p class="title">Debug console</p>';
document.body.appendChild(node);

/**
 ********** Console handler **********
 **/

const baseLogFunction = console.log;
const baseWarnFunction = console.warn;

function handleLog(logArguments, classes) {
  const args = Array.prototype.slice.call(logArguments);
  for (var iterator = 0; iterator < args.length; iterator += 1) {
    const now = new Date();

    const debugDate = document.createElement('p');
    debugDate.innerHTML = `${now.getHours()}h${`0${now.getMinutes()}`.slice(-2)}`;
    debugDate.classList.add('input');
    document.getElementById('mobile-debug').appendChild(debugDate);

    const debugValue = document.createElement('p');
    debugValue.innerHTML = args[iterator];
    debugValue.classList.add('value');
    classes.forEach((cssClass) => {
      debugValue.classList.add(cssClass);
    });
    document.getElementById('mobile-debug').appendChild(debugValue);
  }
}

console.warn = (...args) => {
  baseWarnFunction.apply(console, args);
  handleLog(args, ['warn']);
};

console.log = (...args) => {
  baseLogFunction.apply(console, args);
  handleLog(args, []);
};

window.onerror = (message, url, linenumber) => {
  const debugMessage = `<span class="error">&times;</span>
    JavaScript error: ${message} on line ${linenumber} for ${url}
  `;
  console.log(debugMessage);
};
