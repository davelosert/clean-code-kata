// Karma configuration
// Generated on Wed Jul 08 2015 13:40:22 GMT+0200 (Mitteleuropäische Sommerzeit)

module.exports = function (config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './', // (dlo) Set to be relative to directory of karma.conf.js-File


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jquery-3.1.1', 'jasmine-jquery','jasmine'], // jasmine-jquery needs to be BEFORE jasmine, as plugins are loaded from right ot left

        // list of files / patterns to load in the browser
        files: [
            {pattern: 'test/fixtures/**/*', served: true, included: false, watched: true}, // Make the fixtures statically available from the Karma-Webserver
            'src/refactor_code.js',
            'test/tests.js'
        ],

        proxies: {
          '/spec/javascripts/fixtures' : '/base/test/fixtures' // jasmine-jquery sends all fixture-requests to the key-url, so we map them to the actually fixtures-position
        },


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'mocha'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
