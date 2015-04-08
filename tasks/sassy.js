/**
 * Created by kevin on 4/7/15.
 */
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    errorHandler = require('./../util/handleErrors');
gulp.task('styles', function() {
    return sass('./src/styles/main.scss', { style: 'expanded' })
        .on('error', errorHandler)
        .pipe(autoprefixer({
            browsers: ['last 2 version'],
            cascade: false
        })).on('error', errorHandler)
        .pipe(gulp.dest('dist/styles')).on('error', errorHandler)
        .pipe(rename({ suffix: '.min' })).on('error', errorHandler)
        .pipe(minifycss()).on('error', errorHandler)
        .pipe(gulp.dest('dist/styles')).on('error', errorHandler)
        .pipe(notify({ message: 'Styles task complete' }));
});