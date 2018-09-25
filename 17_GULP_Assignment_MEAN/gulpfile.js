const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const header = require('gulp-header');
const footer = require('gulp-footer');
const minify = require('gulp-minify');

/* 
    1. Write a program to coping data from one file to another using gulp
*/
gulp.task('copy_data', function () {
    return gulp.src('workfiles/foo.js', { base: 'workfiles/' })
        .pipe(gulp.dest('dist/copied_workfiles/'));
});


/* 
    2. Write a program to compile or debuging a file using gulp.
*/
gulp.task('compile', function () {
    return gulp.src('workfiles/foo.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/compiled'));
});


/* 
    3. Write a program to concate 2 or more files using gulp
*/
gulp.task('concat_all', function () {
    return gulp.src('workfiles/*.js')
        .pipe(concat('concat_all.js'))
        .pipe(gulp.dest('dist'));
});


/* 
    4. Write a program to adding header or footer to all the files using gulp.
*/
gulp.task('header_footer', function () {
    var pkg = require('./package.json');
    var banner = ['/**',
        ' * <%= pkg.name %> - <%= pkg.description %>',
        ' * @version v<%= pkg.version %>',
        ' * @link <%= pkg.homepage %>',
        ' * @license <%= pkg.license %>',
        ' */',
        ''].join('\n');

    gulp.src('workfiles/*.js')
        .pipe(header(banner, { pkg: pkg }))
        .pipe(footer('\n\n//-------------------End of Program-------------------'))
        .pipe(gulp.dest('dist'));
});


/* 
    5. Write a program to minification of files using gulp.
*/
gulp.task('minify', function () {
    return gulp.src('workfiles/*.js')
        .pipe(minify({
            noSource: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copy_data', 'compile', 'concat_all', 'header_footer', 'minify'])