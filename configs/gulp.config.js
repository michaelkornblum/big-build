const { getSizes } = require('../functions');
const webpackConfig = require('./webpack.config');

exports.imageResize = {
  src: 'images/resize/**/*',
  dest: 'build/images',
  responsiveImages: {
    '*.jpg': getSizes(480, 960, 1920),
  },
  smushit: {
    verbose: true,
  },
};

exports.imageCompress = {
  src: 'images/cropped/**/*',
  dest: 'build/images',
  smushit: {
    verbose: true,
  },
};

exports.javascriptBundle = {
  src: 'scripts/main.js',
  dest: 'build/scripts',
  webpackStream: webpackConfig,
};
