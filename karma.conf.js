process.env.NODE_ENV = 'test';
process.env.BABEL_ENV = 'test';

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'webpack'],
    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-spec-reporter',
    ],
    files: [{ pattern: 'test/**/*.spec.js', watched: false }],
    preprocessors: {
      'test/**/*.spec.js': ['webpack'],
    },
    webpack: {
      mode: 'development',
      devtool: false,
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [['babel-preset-react-app', { runtime: 'automatic' }]],
              plugins: [
                [
                  'istanbul',
                  {
                    include: ['src/**/*.js'],
                    exclude: ['src/index.js', 'src/reportWebVitals.js', 'src/setupTests.js'],
                  },
                ],
              ],
            },
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
      resolve: { extensions: ['.js'] },
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
    },
    browsers: ['ChromeHeadless'],
    singleRun: true,
  });
};