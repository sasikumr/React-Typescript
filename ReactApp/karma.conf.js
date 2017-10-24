// Karma configuration
// Generated on Fri Oct 20 2017 18:16:18 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha','typescript'],


    // list of files / patterns to load in the browser
    files: [
        'tests.webpack.js', 'JSUnitTests/lib/bootstrap.min.js',
        'JSUnitTests/lib/jquery.easing.1.3.js',
      {pattern: 'JSUnitTests/Test/*.spect.ts', included: false}
    ],

    
    // list of files to exclude
    exclude: [
    ],

    plugins: [
        'karma-chrome-launcher',
        'karma-mocha',
        'karma-mocha-reporter',
        'karma-sourcemap-loader',
        'karma-webpack',
        'karma-firefox-launcher',
        'karma-jquery',
        'karma-sinon',
        'karma-junit-reporter'
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        '**/*.ts': ['typescript']
    },
    typescriptPreprocessor: {
        // options passed to the typescript compiler 
        options: {
            allowJs: true,
            allowSyntheticDefaultImports: true,
            sourceMap: false, // (optional) Generates corresponding .map file. 
            target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5' 
            module: 'es2015', // (optional) Specify module code generation: 'commonjs' or 'amd' 
            noImplicitAny: false, // (optional) Warn on expressions and declarations with an implied 'any' type. 
            noResolve: true, // (optional) Skip resolution and preprocessing. 
            removeComments: true, // (optional) Do not emit comments to output. 
            concatenateOutput: false // (optional) Concatenate and emit output to single file. By default true if module option is omited, otherwise false. 
        },
        // transforming the filenames 
        transformPath: function (path) {
            return path.replace(/\.ts$/, '.js');
        }
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


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
    browsers: ['Chrome', 'Firefox', 'IE'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    webpack: {
        devtool: 'inline-source-map',
        module: {
            loaders: [
                {
                    test: /\.tsx?$/, exclude: /node_modules/,
                    loader: 'awesome-typescript-loader?silent=true'
                    
                },
                //See https://github.com/airbnb/enzyme/issues/309 as to why json loader is needed. 
                {
                    test: /\.json$/,
                    loader: 'json',
                },
                { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml' },
                {
                    test: /\.css$/,
                    loader: "style-loader!css-loader"
                }
            ]
        },
        //Needed for enzyme working with webpack & React 15.0.x. See http://airbnb.io/enzyme/docs/guides/webpack.html#react-15-compatability 
        externals: {
            'react/addons': true,
            'react/lib/ExecutionEnvironment': true,
            'react/lib/ReactContext': true
        },
        watch: true
    },
    webpackServer: {
        noInfo: true
    }
  })
}
