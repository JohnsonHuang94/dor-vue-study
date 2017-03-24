var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'
var px2rem = require('postcss-px2rem')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  module: {
    loaders: [
      {
        test: /\.css$/,
        // loader: "style-loader!css-loader!postcss-loader"
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader', 'autoprefixer', 'px2rem']})
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader', 'autoprefixer', 'px2rem']})
      }
    ]
  },
  postcss: [
    require('autoprefixer')({
      browsers: ['iOS >= 7', 'Android >= 4.1']
    })
  ],
  postcss: function() {
    return [px2rem({remUnit: 75})];
  }
}
