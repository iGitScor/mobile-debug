window.mDebug = {};

window.mDebug.push = (...args) => {
  for (let debugIndex = 0; debugIndex < args.length; debugIndex += 1) {
    const entry = args[debugIndex];

    const debugDate = document.createElement('p');
    debugDate.innerHTML = entry.date;
    debugDate.classList.add('input');
    document.getElementById('mobile-debug').appendChild(debugDate);

    const debugValue = document.createElement('p');
    debugValue.innerHTML = entry.value;
    debugValue.classList.add('value');
    entry.type.forEach((cssClass) => {
      debugValue.classList.add(cssClass);
    });

    document.getElementById('mobile-debug').appendChild(debugValue);
  }
};
