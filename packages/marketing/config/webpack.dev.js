const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common.js');
const packageJson = require("../package.json");

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename:'remoteEntry.js',
      exposes:{
        './MarketingApp':'./src/bootstrap'
      },
      // shared:['react','react-dom']
      shared:packageJson.dependencies,// Take package.json dependencies and share them
    }),
  ],
};

module.exports = merge(commonConfig,devConfig);