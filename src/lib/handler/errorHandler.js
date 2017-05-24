/**
 ********** Error handler **********
 **/

import handleLog from './logHandler';

window.onerror = (message, url, linenumber) => {
  const debugMessage = `Error: ${message} on line ${linenumber} for ${url}`;
  handleLog([debugMessage], ['error']);
};
