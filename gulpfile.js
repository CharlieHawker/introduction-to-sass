var gulp = require('gulp'),
    sass = require('gulp-sass');

// Takes SASS files and makes them into CSS
gulp.task('sass', function() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

// Copies Templates from src to dist
gulp.task('templates', function() {
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'));
})

// Watches existing *.scss files and *.html files and re-runs associated tasks
gulp.task('watch', function() {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/**/*.html', ['templates']);
})

// Default task runner
gulp.task('default', ['sass', 'templates', 'watch']);
