var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var stringify = require('stringify');

var paths = {
    pages: ['src/*.html']
};

var watchedBrowserify = watchify(browserify({
            basedir: '.',
            debug: true,
            entries: ['src/main.ts'],
            cache: {},
            packageCache: {}
        })
        .plugin(tsify));
        // .transform(stringify,{
        //     appliesTo: { includeExtensions: ['.html'] },
        //     minify: true
        // }));
// console.log(watchedBrowserify);

function copyHTML(){
    console.log('copyHTML');
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dest"));
}
function bundle() {
    copyHTML();
    
    console.log('bundle');
    
    
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("dest"));
}

gulp.task("copy-html", copyHTML);
gulp.task("default", ["copy-html"], bundle);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);