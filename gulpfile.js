var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('projects/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('projects/'))
});

//Watch task
gulp.task('default', function () {
  return gulp.watch('projects/**/*.scss', gulp.series('sass'));
});
