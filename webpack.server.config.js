var webpack = require('webpack');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

// HACK FOR FLUMMOX INSTANCEOF ISSUE
// Uncomment this line to see what I'm talking about
nodeModules['flummox/component'] = 'commonjs flummox/component';

module.exports = {
  entry: './app/server',

  target: 'node',

  node: {
    console: true,
    process: true,
    global: true,
    Buffer: true,
    __filename: true,
    __dirname: true
  },

  output: {
    filename: 'index.js',
    path: 'build'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader?optional[]=es7.classProperties,optional[]=es7.objectRestSpread,optional[]=es7.decorators' },
      { test: /\.less$/, loader: 'css-loader/locals?localIdentName=' + (process.env.NODE_ENV === 'development' ? '[name]__[local]___[hash:base64:7]' : '[hash:base64:7]') + '!postcss-loader!less-loader' },
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

  externals: nodeModules,

  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify({ CLIENT: false, SERVER: true })
    }),
    new webpack.BannerPlugin('require("source-map-support").install();', { raw: true, entryOnly: false })
  ]
};
