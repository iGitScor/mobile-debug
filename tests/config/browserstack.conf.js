/* eslint-env node */
/* eslint global-require: 0 */
/* eslint import/no-extraneous-dependencies: 1 */

require('dotenv').config();

const host = 'hub-cloud.browserstack.com';
const port = 80;

const browserstackConfig = {
  src_folders: ['tests/specs'],
  output_folder: 'tests/reports/browserstack',
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
      launch_url: 'http://127.0.0.1:8091',
      globals: require('./env/browserstack'),
      desiredCapabilities: {
        build: 'nightwatch-browserstack',
        'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
        'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
        'browserstack.local': true,
        browser: 'chrome',
      },
    },
  },
};

module.exports = browserstackConfig;
