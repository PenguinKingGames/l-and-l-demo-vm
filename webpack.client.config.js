var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/client',

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: 'public'
  },

  module: {
    loaders: [
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?localIdentName=' + (process.env.NODE_ENV === 'development' ? '[name]__[local]___[hash:base64:7]' : '[hash:base64:7]') + '!postcss-loader!less-loader') },
      { test: /\.png$/, loader: 'url-loader?limit=' + String(1024 * 1024) + '&mimetype=image/png' },
      { test: /\.jpg$/, loader: 'url-loader?limit=' + String(1024 * 1024) + '&mimetype=image/jpeg' },
      { test: /\.svg$/, loader: 'url-loader?limit=' + String(1024 * 1024) + '&mimetype=image/svg+xml!svgo-loader' },
      { test: /\.js$/, loader: 'babel-loader?optional[]=es7.classProperties,optional[]=es7.objectRestSpread,optional[]=es7.decorators', exclude: /node_modules/ },
      { test: require.resolve('react'), loader: 'expose?React' }
    ]
  },

  postcss: [
    require('autoprefixer-core'),
    require('postcss-local-scope')
  ],

  resolve: {
    modulesDirectories: ['node_modules', 'wip_modules', 'components', 'theme']
  },

  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify({ CLIENT: true, SERVER: false })
    }),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
};
