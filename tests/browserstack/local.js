/* eslint-env node */

require('dotenv').config();

// const crypto = require('crypto');
const browserstack = require('browserstack-local');

// const localIdentifier = process.env.TRAVIS_JOB_NUMBER ||
//   crypto.randomBytes(20).toString('hex');

// Creates an instance of Local testing
const localInstance = new browserstack.Local();

const options = {
  key: process.env.BROWSERSTACK_ACCESS_KEY,
};

// starts the Local instance with the required arguments
localInstance.start(options, () => {
  console.log('BrowserStackLocal instance is running for local testing');
});

// check if BrowserStack local instance is running
console.log(localInstance.isRunning());

// stop the Local instance
localInstance.stop(() => {
  console.log('Stopped BrowserStackLocal');
});
