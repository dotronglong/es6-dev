#!/usr/bin/env node
var gulp = require("gulp");
var babel = require("gulp-babel");

var sources = [], dist = "dist";
process.argv.forEach(function (key, i, args) {
    if (i % 2 === 0) {
        var val = args[i + 1];
        switch (key) {
            case "-s":
            case "--source":
                sources.push(val);
                break;
            case "-d":
            case "--dest":
                dist = val;
                break;
            default:
                break;
        }
    }
});

gulp.task("build", function() {
    return gulp.src(sources)
      .pipe(babel())
      .pipe(gulp.dest(dist));
});
gulp.task("default", ["build"]);

gulp.task("watch", function() {
    gulp.watch(sources, ["build"]);
});

gulp.start("watch");