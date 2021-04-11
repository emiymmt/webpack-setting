const { merge } =  require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const path = require('path');

module.exports = merge(commonConfig, {
  mode: "development",
  watch: true,
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    open: false,
    port: 9000,
    contentBase: path.resolve(__dirname,'public')
  }
});
