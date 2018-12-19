const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();

gulp.task("serve", ["sass"], function() {
  browserSync.init({
    server: "./site"
  });

  gulp.watch("site/scss/*.scss", ["sass"]);
  gulp.watch("site/*.html").on("change", browserSync.reload);
});

gulp.task("sass", function() {
  return gulp
    .src("site/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("site/css"))
    .pipe(browserSync.stream());
});

gulp.task("css_classes", function() {
  gulp
    .src("./sass/css_classes.scss")
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("./css"));
});

gulp.task("minify_css", function() {
  gulp
    .src("./sass/css_classes.scss")
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(rename("css_classes.min.css"))
    .pipe(gulp.dest("./css"));
});

gulp.task("default", ["minify_css"]);
