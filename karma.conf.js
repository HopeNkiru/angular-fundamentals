// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: boolean // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/angular-fundamentals'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: boolean
    },
    reporters: ['progress', 'kjhtml'],
    port: number,
    colors: boolean,
    logLevel: config.LOG_INFO,
    autoWatch: boolean,
    browsers: ['Chrome'],
    singleRun: boolean,
    restartOnFileChange: boolean
  });
};
