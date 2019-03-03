const merge = require('webpack-merge');
const parts = require('./webpack.parts');

exports.commonConfig = merge([
  parts.loadJavaScript(),
  parts.loadHtml()
]);
