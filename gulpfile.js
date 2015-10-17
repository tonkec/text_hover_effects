var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task('styles', function() {
   return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function(){
  gulp.watch('sass/**/*.scss',['styles']);
});

gulp.task("default", ['styles', 'watch']);