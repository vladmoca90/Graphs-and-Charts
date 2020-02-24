var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('styles/'))
});

//Watch task
gulp.task('default', function () {
  return gulp.watch('styles/*.scss', gulp.series('sass'));
});
