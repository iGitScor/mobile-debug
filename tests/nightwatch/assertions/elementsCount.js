/* eslint-env node */

/**
 * Checks if the given selector is present the expected number of times.
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.elementsCount('#x-root', 1);
 *    };
 * ```
 *
 * @method attributeEquals
 * @param {string} selector The selector (CSS / Xpath) used to locate the element.
 * @param {string} expected The expected value of the attribute to check.
 * @param {string} message  Optional log message to display in the output. (has default one)
 * @api assertions
 */

var util = require('util');

exports.assertion = (selector, expected, message) => {
  var MSG_ELEMENT_NOT_FOUND = 'Testing if the count for the element <%s> is %s. ';

  this.message = message ||
    util.format('Testing if the count for the element <%s> is %s.', selector, expected);

  this.expected = () => expected;

  this.pass = value => value === expected;

  this.failure = (result) => {
    var failed = result === false ? true : result && result.status === -1;
    if (failed) {
      this.message = message || util.format(MSG_ELEMENT_NOT_FOUND, selector, expected);
    }

    return failed;
  };

  this.value = result => result.value.length;

  this.command = callback => this.api.elements('css selector', selector, callback);
};
