'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect-php'),
    browserSync = require("browser-sync");

gulp.task('build', function () {
    gulp.src('index.php')
        .pipe(gulp.dest('build'))
});


gulp.task('php', function() {
    connect.server({ base: './', port: 8010, keepalive: true});
});

gulp.task('webserver',['php'], function() {
    browserSync({
        proxy: '127.0.0.1:8010',
        port: 8080,
        open: true,
        notify: false
    });
});

gulp.task('default', ['webserver']);