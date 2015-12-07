var babel = require("gulp-babel");
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sourcemaps = require("gulp-sourcemaps");
var ts = require('gulp-typescript');

var config = {
  tsFiles: ['src/**/*.ts'],
  jsFiles: ['src/**/*.js'],
};

gulp.task('default', ['ts', 'watch']);

// Compile typescript sources
gulp.task('ts', function() {
  gulp.src(config.tsFiles)
    .pipe(ts({
      module: 'commonjs',
      target: 'ES5'
    }))
    .js
    .pipe(gulp.dest('./build'));
});

gulp.task('js', function () {
  gulp.src(config.jsFiles)
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('./build'));
});

gulp.task('build', ['js', 'ts']);

gulp.task('watch', ['build'], function() {
  gulp.watch(config.tsFiles, ['ts']);
  gulp.watch(config.jsFiles, ['js']);
});

gulp.task('nodemon', ['watch'], function() {
  nodemon({script: 'build/server/index.js'});
});
