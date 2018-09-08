var gulp = require('gulp');
var concat = require('gulp-concat');

// TODO: None of them are woking , this has to be fixed.

/* 
    1. Write a program to coping data from one file to anotherusing gulp
*/
gulp.task('copy_data', function () {
    return gulp.src('workfiles/sample.txt')
        .pipe(gulp.dest('*.copy.txt'))
});


/* 
    2. Write a program to compile or debuging a fileusing gulp.
*/
gulp.task('compile', function () {
    return gulp.src('./workfiles/concat.txt')
        .pipe(concat('concatinated_files.txt'))
        .pipe(gulp.dest('./workfiles/'));
});


/* 
    3. Write a program to concate 2 or more filesusing gulp
*/
gulp.task('concat_all', function () {
    return gulp.src('./workfiles/concat.txt')
        .pipe(concat('concatinated_files.txt'))
        .pipe(gulp.dest('./workfiles/'));
});


/* 
    4. Write a program to adding header or footer to all the files using gulp.
*/
gulp.task('header_footer', function () {
    return gulp.src('./workfiles/concat.txt')
        .pipe(concat('concatinated_files.txt'))
        .pipe(gulp.dest('./workfiles/'));
});



/* 
    5. Write a program to minification of files using gulp.
*/
gulp.task('minify', function () {
    return gulp.src('./workfiles/concat.txt')
        .pipe(concat('concatinated_files.txt'))
        .pipe(gulp.dest('./workfiles/'));
});

gulp.task('default', ['copy_data', 'compile', 'concat_all', 'header_footer', 'minify'])