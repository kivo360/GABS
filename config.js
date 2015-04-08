'use strict';

module.exports = {
  'styles': {
    'src' : './src/styles/**/*.scss',
    'dest': './dist/styles'
  },

  'scripts': {
    'src' : './src/scripts/**/*.js',
    'dest': './dist/scripts'
  },

  'dist': {
    'root'  : 'build'
  },

  'browserify': {
    'entries'   : ['./src/scripts/main.js'],
    'bundleName': 'main.js',
    'sourcemap' : true
  }

};

