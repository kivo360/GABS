/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */
 
// Load plugins
var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    del = require('del');

require('./tasks/browserify');
require('./tasks/sassy');
require('./tasks/scripts');

// Clean
gulp.task('clean', function(cb) {
    del(['dist/assets/css', 'dist/assets/js'], cb)
});
 
// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'watch', 'browserify');
});
 
// Watch
gulp.task('watch', function() {
 
  // Watch .scss files
  gulp.watch('src/styles/**/*.scss', ['styles']);
 
  // Watch .js files
  gulp.watch('src/scripts/**/*.js', ['scripts', 'browserify']);
 
  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', livereload.changed).on('error', errorHandler);
 
});

function errorHandler (error) {
    console.log(error.toString());
    this.emit('end');
}