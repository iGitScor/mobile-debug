/* eslint-env node */

module.exports = {
  before: (browser) => {
    this.data = browser.globals;
  },

  'Default version': (browser) => {
    browser
      .url(browser.launchUrl + this.data.urls.default)
      .waitForElementVisible('body', 1000)
      .assert.hidden('#mobile-debug', 'Check if the console is hidden')
      .waitForElementVisible('#mobile-debug-counter', 1000)
      .assert.visible('#mobile-debug-counter', 'Check if the counter has rendered')
      .click('#mobile-debug-counter')
      .assert.visible('#mobile-debug', 'Check if the console is shown')
    ;
  },

  'Touch version': (browser) => {
    browser
      .url(browser.launchUrl + this.data.urls.touch)
      .waitForElementVisible('body', 1000)
      .assert.hidden('#mobile-debug', 'Check if the console is hidden')
      .triggerTouch('body', 'touchstart', 2)
      .triggerTouch('body', 'touchstart', 2)
      .assert.visible('#mobile-debug', 'Check if the console is shown')
    ;
  },

  after: browser => browser.end(),
};
