var args = require('yargs').argv;
var babel = require('gulp-babel');
var gulp = require('gulp');
var node_inspector = require('gulp-node-inspector');
var nodemon = require('gulp-nodemon');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');

var config = {
  tsFiles: ['src/**/*.ts'],
  jsFiles: ['src/**/*.js'],
};

gulp.task('inspect', function () {
  gulp.src([]).pipe(node_inspector({
    debugPort: 5858,
    webHost: '0.0.0.0',
    webPort: '8080',
    preload: false
  }));
});

gulp.task('default', ['ts', 'watch']);

// Compile typescript sources
gulp.task('ts', function() {
  var tsProject = ts.createProject('tsconfig.json', {
    sortOutput: true,
  });
  tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build'));
});

gulp.task('js', function () {
  gulp.src(config.jsFiles)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('./build'));
});

gulp.task('client_assets', function () {
  gulp.src(['src/client/*', '!*.ts', '!*.js'])
    .pipe(gulp.dest('./build'));
});

gulp.task('build', ['js', 'ts', 'client_assets']);

gulp.task('watch', ['build'], function() {
  gulp.watch(config.tsFiles, ['ts']);
  gulp.watch(config.jsFiles, ['js']);
});


var deps = ['watch'];
if (args.debug) {
  deps.push('inspect');
}

// Depending on "watch" not because that implicitly triggers this, but
// just to start up the watcher and reprocessor, and nodemon restarts
// based on its own logic below.
gulp.task('nodemon', deps, function() {
  var options = {
    script: 'build/server/index.js',
    nodeArgs: [],
    watch: ['build/server/'],
  };
  if (args.debug) {
    options.nodeArgs.push('--debug');
  }
  nodemon(options);
});
