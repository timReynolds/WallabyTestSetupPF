var babel = require('babel');

module.exports = function (wallaby) {
    var wallabyBabelCompiler = wallaby.compilers.babel({
        babel: babel,
        stage: 0
    });

    return {
        debug: true,
        files: [
            { pattern: 'jest-setupEnvScriptFile.js', instrument: false },
            { pattern: 'jest-setupTestFrameworkScriptFile.js', instrument: false },
            'package.json',
            'src/**/*.js',
            '!src/**/__tests__/*.js'
        ],
        tests: [
            '__tests__/**/*.js',
            'src/**/__tests__/*.js'
        ],
        env: {
            type: 'node',
            runner: 'node',
            params: {
                runner: '--harmony'
            }
        },
        compilers: {
            'src/**/*.js*': wallabyBabelCompiler
        },
        workers: {
            initial: 10,
            regular: 5
        },
        testFramework: 'jest',
        bootstrap: function (wallaby) {
            var config = require('./package.json').jest;
            wallaby.testFramework.configure(config);
        }
    };
};