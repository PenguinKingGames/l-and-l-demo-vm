var gulp = require('gulp');
var webpack = require('webpack');
var nodemon = require('nodemon');
var path = require('path');

var clientConfig = require('./webpack.client.config.js');
var serverConfig = require('./webpack.server.config.js');

if (process.env.NODE_ENV !== 'production') {
  clientConfig.devtool = '#eval-source-map';
  clientConfig.debug = true;

  serverConfig.devtool = '#eval-source-map';
  serverConfig.debug = true;
}

function onBuild(done) {
  return function(err, stats) {
    if(err) {
      console.log('Error', err);
    }
    else {
      console.log(stats.toString());
    }

    if(done) {
      done();
    }
  }
}

gulp.task('client-build', function(done) {
  webpack(clientConfig).run(onBuild(done));
});

gulp.task('client-watch', ['client-build'], function() {
  webpack(clientConfig).watch(100, onBuild());
});

gulp.task('server-build', ['client-build'], function(done) {
  webpack(serverConfig).run(onBuild(done));
});

gulp.task('server-watch', ['server-build', 'client-build'], function() {
  webpack(serverConfig).watch(100, function(err, stats) {
    onBuild()(err, stats);
    nodemon.restart();
  });
});

gulp.task('build', ['client-build', 'server-build']);
gulp.task('watch', ['client-watch', 'server-watch']);

gulp.task('dev', ['server-watch', 'client-watch'], function() {
  nodemon({
    execMap: {
      js: 'node'
    },
    script: path.join(__dirname, 'build/index.js'),
    ignore: ['*'],
    watch: ['foo/'],
    ext: 'noop'
  }).on('restart', function() {
    console.log('Restarted!');
  });
});

gulp.task('default', ['build']);
