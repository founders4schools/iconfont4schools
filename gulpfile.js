var gulp = require('gulp'),
  iconfont = require('gulp-iconfont'),
  consolidate = require('gulp-consolidate'),
  cssnano = require('gulp-cssnano'),
  rename = require('gulp-rename'),
  runTimestamp = Math.round(Date.now()/1000);

gulp.task('iconfont', function(){
  return gulp.src(['assets/icons/*.svg'])
    .pipe(iconfont({
      fontName: 'iconfont4s', // required
      normalize: true,
      appendUnicode: true,
      fontHeight: 1001,
      formats: ['ttf', 'eot', 'woff', 'svg'], // 'woff2' and 'svg' are available
      timestamp: runTimestamp, // recommended to get consistent builds when watching files
    }))
    .on('glyphs', function(glyphs, options) {
      gulp.src('assets/templates/iconfont4s.css')
        .pipe(consolidate('swig', {
          glyphs: glyphs.map(function(glyph) {
            return {
              name: glyph.name,
              codepoint: glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()
            }
          }),
          fontName: 'iconfont4s',
          fontPath: '../fonts/',
          className: 'if4s'
        }))
        .pipe(gulp.dest('css/'));
    })
    .pipe(gulp.dest('fonts/'));
});

gulp.task('minify-css', ['iconfont'], function() {
    return gulp.src('./css/iconfont4s.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css/'));
});

gulp.task('build', ['iconfont', 'minify-css']);
