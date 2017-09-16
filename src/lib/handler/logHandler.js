/**
 ********** Console handler **********
 **/

const baseLogFunction = console.log;
const baseWarnFunction = console.warn;
const baseErrorFunction = console.error;

function handleLog(logArguments, classes = []) {
  const args = Array.prototype.slice.call(logArguments);
  for (var iterator = 0; iterator < args.length; iterator += 1) {
    const now = new Date();

    window.mDebug.push({
      date: `${now.getHours()}h${`0${now.getMinutes()}`.slice(-2)}`,
      value: args[iterator],
      type: classes,
    });
  }
}

console.error = (...args) => {
  baseErrorFunction.apply(console, args);
  handleLog(args, ['error']);
};

console.warn = (...args) => {
  baseWarnFunction.apply(console, args);
  handleLog(args, ['warn']);
};

console.log = (...args) => {
  baseLogFunction.apply(console, args);
  handleLog(args);
};

export { handleLog as default };
