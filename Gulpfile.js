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

  gulp.watch("site/scss/*.scss", ["scss"]);
  gulp.watch("site/*.html").on("change", browserSync.reload);
});

gulp.task("scss", function() {
  return gulp
    .src("site/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("site/css"))
    .pipe(browserSync.stream());
});

gulp.task("generate_css", function() {
  gulp
    .src("./scss/text_hover.scss")
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("./css"));
});

gulp.task("generate_minified_css", function() {
  gulp
    .src("./scss/text_hover.scss")
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(rename("text_hover.min.css"))
    .pipe(gulp.dest("./css"));
});

gulp.task("default", ["generate_minified_css"]);
