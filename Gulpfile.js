const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

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
