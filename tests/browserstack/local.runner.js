#!/usr/bin/env node

/* eslint-env node */

var path = require('path');
var nightwatch = require('nightwatch');
var browserstack = require('browserstack-local');
var bsLocalInstance;

try {
  process.mainModule.filename = './node_modules/nightwatch/bin/nightwatch';
  console.log('Connecting local');
  var bsLocalInstance = new browserstack.Local();
  nightwatch.bsLocalInstance = bsLocalInstance;
  bsLocalInstance.start(
    {
      key: process.env.BROWSERSTACK_ACCESS_KEY,
      f: path.resolve(`${process.cwd()}/tests/src`),
      force: true,
      forceLocal: true,
      onlyAutomate: true,
    },
    (error) => {
      if (error) throw error;

      console.log('Connected. Now testing...');
      nightwatch.cli((argv) => {
        nightwatch.CliRunner(argv)
          .setup(null, () => {
            bsLocalInstance.stop(() => {});
          })
          .runTests(() => {
            bsLocalInstance.stop(() => {});
          });
      });
    }
  );
} catch (executionException) {
  console.log('There was an error while starting the test runner:\n\n');
  process.stderr.write(`${executionException.stack}\n`);
  process.exit(2);
}
