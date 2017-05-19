/* eslint-env node */
/* eslint global-require: 0 */
/* eslint import/no-extraneous-dependencies: 1 */

require('dotenv').config();

const crypto = require('crypto');

const host = 'ondemand.saucelabs.com';
const port = 80;

const TRAVIS_JOB_NUMBER = process.env.TRAVIS_JOB_NUMBER ||
  crypto.randomBytes(20).toString('hex');

const saucelabsConfig = {
  src_folders: ['tests/specs'],
  output_folder: 'tests/reports/saucelabs',
  custom_assertions_path: 'tests/nightwatch/assertions',
  custom_commands_path: 'tests/nightwatch/commands',

  selenium: {
    start_process: false,
    host,
    port,
  },

  test_settings: {
    default: {
      selenium_host: host,
      selenium_port: port,

      // launch_url: 'http://localhost:8091',
      launch_url: 'http://ondemand.saucelabs.com:80',
      globals: require('./env/saucelabs'),
      username: process.env.SAUCE_USERNAME || 'SAUCE_USERNAME',
      access_key: process.env.SAUCE_ACCESS_KEY || 'SAUCE_ACCESS_KEY',
      desiredCapabilities: {
        browser: 'chrome',
        build: `build-${TRAVIS_JOB_NUMBER}`,
        'tunnel-identifier': TRAVIS_JOB_NUMBER,
      },
      screenshots: {
        enabled: false,
        path: '',
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        platform: 'OS X 10.11',
        version: '47',
      },
    },

    ie11: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        platform: 'Windows 10',
        version: '11.0',
      },
    },
  },
};

module.exports = saucelabsConfig;
