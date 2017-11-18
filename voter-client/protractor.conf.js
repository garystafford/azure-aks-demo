exports.config = {
  seleniumAddress: 'http://selenium-hub:4444/wd/hub',
  specs: ['./test/protractor/*.js'],
  framework: 'jasmine2',
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['no-sandbox']
    }
  }
};
