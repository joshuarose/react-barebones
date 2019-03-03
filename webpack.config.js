const merge = require('webpack-merge');
const { commonConfig } = require('./config/webpack.common');
const { developmentConfig } = require('./config/webpack.dev');
const { productionConfig } = require('./config/webpack.prod');

module.exports = mode => {
  const config = mode || process.env.NODE_ENV;
  let modeConfig = developmentConfig;
  if (config === 'production' || config === 'test') {
    modeConfig = productionConfig;
  }
  return merge(commonConfig, modeConfig);
};
