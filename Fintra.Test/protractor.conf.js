// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        './e2e/Masters/**/*.e2e-spec.ts'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: true,
    baseUrl: 'localhost:3000',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function() {}
    },
    params: {
      login: {
          username: 'superuser',
          password: '12345'
      }
  },
    onPrepare() {
      browser.driver.manage().window().maximize();
      var origFn = browser.driver.controlFlow().execute;
        browser.driver.controlFlow().execute = function() {
            var args = arguments;
            // queue 200ms wait
            origFn.call(browser.driver.controlFlow(), function() {
                return protractor.promise.delayed(100);
            });
            return origFn.apply(browser.driver.controlFlow(), args);
        };
        require('ts-node').register({
            project: 'e2e/tsconfig.e2e.json'
        });
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    }
};
