(function () {
    'use strict';

    var gulp = require('gulp');
    var babelify = require('babelify');
    var browserify = require('browserify');
    var source = require('vinyl-source-stream');

    gulp.task('build', function () {
        browserify({
            entries: './app/scripts/core/main.js',
            debug: true
        })
            .transform(babelify)
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./app/scripts'));
    });

}());
