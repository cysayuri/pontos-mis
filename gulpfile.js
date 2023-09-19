const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const webp = require('gulp-webp');
const image = require('gulp-image');

function imageminWebp() {
  gulp
    .src('./assets/images/*')
    .pipe(image())
    .pipe(gulp.dest('./assets/images/minify'));
}

function createStyle() {
  return gulp
    .src('./assets/css/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
}

function keepWatching() {
  browserSync.init({
    startPath: './pages/',
    server: {
      baseDir: './',
    },
  });
  gulp.watch('./assets/css/**/*.scss', createStyle);
  gulp.watch('./pages/*.html').on('change', browserSync.reload);
  gulp.watch('./assets/js/*.js').on('change', browserSync.reload);
  gulp.watch('./assets/images/*', imageminWebp);
}

exports.style = createStyle;

exports.watch = keepWatching;

exports.minify = imageminWebp;
