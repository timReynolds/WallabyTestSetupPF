var jasmineReporters = require('jasmine-reporters');

jasmine.VERBOSE = false;
jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
    savePath: 'report_output/',
    consolidateAll: false
}));