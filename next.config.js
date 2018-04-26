require('dotenv').config();
const webpack = require('webpack');
const Uglify = require('uglifyjs-webpack-plugin');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack: (config, { dev }) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin');
    if (!dev) {
      config.plugins.push(new Uglify());
    }
    return config;
  },
});
