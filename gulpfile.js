const {src, dest, watch, parallel} = require("gulp");

const scss = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function SASSpreprocessing() {
    return src("./src/scss/style.scss")
        .pipe(scss({outputStyle: "compressed"}))
        .pipe(dest('./public/css'))
        .pipe(browserSync.stream());
}

function HTMLpreprocessing() {
    return src("src/*.html")
        .pipe(dest('public'));
}

function browser() {
    browserSync.init({
        server: {
            baseDir: "public"
        }
    });
}

function watching() {
    watch(["src/scss/**/*.scss"], SASSpreprocessing);
    watch(["src/*.html"], HTMLpreprocessing);
    watch("public/*.html").on('change', browserSync.reload);
}

exports.SASSpreprocessing = SASSpreprocessing;
exports.HTMLpreprocessing = HTMLpreprocessing;
exports.watching = watching;
exports.browser = browser;
exports.default = parallel(browser, watching);