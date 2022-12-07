/* eslint-env node */

var gulp = require('gulp'),
  iconfont = require('gulp-iconfont'),
  consolidate = require('gulp-consolidate'),
  cssnano = require('gulp-cssnano'),
  sass = require('gulp-sass')(require('sass')),
  rename = require('gulp-rename'),
  watch = require('gulp-watch'),
  batch = require('gulp-batch'),
  runTimestamp = Math.round(Date.now() / 1000);

function glyphToUnicode(glyph) {
  return {
    name: glyph.name,
    codepoint: glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()
  };
}

gulp.task('iconfont', function () {
  return gulp.src(['assets/icons/*.svg'])
    .pipe(iconfont({
      fontName: 'iconfont4s', // required
      normalize: true,
      prependUnicode: true,
      fontHeight: 1001,
      formats: ['ttf', 'eot', 'woff', 'svg'], // 'woff2' and 'svg' are available
      timestamp: runTimestamp // recommended to get consistent builds when watching files
    }))
    .on('glyphs', function (glyphs) {
      // generate SCSS & CSS
      gulp.src('assets/templates/iconfont4s.scss')
        .pipe(consolidate('swig', {
          glyphs: glyphs.map(glyphToUnicode),
          fontName: 'iconfont4s',
          fontPath: '../fonts/',
          className: 'if4s'
        }))
        .pipe(gulp.dest('./scss/'))
        .pipe(sass())
        .pipe(gulp.dest('./css/'))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css/'));

      // Generate example page
      gulp.src('assets/templates/index.html')
        .pipe(consolidate('swig', {
          glyphs: glyphs.map(glyphToUnicode),
          cssPath: '../css/iconfont4s.min.css',
          className: 'if4s'
        }))
        .pipe(gulp.dest('examples/'));
    })
    .pipe(gulp.dest('fonts/'));
});

gulp.task('build', gulp.series('iconfont'));

gulp.task('watch', function () {
  watch(['assets/templates/*', 'assets/*.svg'], batch(function (events, done) {
    gulp.start('build', done);
  }));
});
