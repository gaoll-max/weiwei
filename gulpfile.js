let gulp = require('gulp');
let sass = require('gulp-sass');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');

gulp.task('sass', () => {
    gulp.src('./src/sass/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename({ suffix: '.min' })).pipe(gulp.dest('./dist/css'));
})
gulp.task('default', () => {
    gulp.watch('./src/sass/*.scss', ['sass']);
})