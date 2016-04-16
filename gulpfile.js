var gulp = require('gulp');
var plumber = require('gulp-plumber');
var react = require('gulp-react');
var watch = require('gulp-watch');
 
gulp.task('jsx', function () {
	return gulp.src('script/jsx/**/*.jsx')
		.pipe(plumber())
		.pipe(react())
		.pipe(gulp.dest('script/js'));
});

gulp.task('watch', ['jsx'], function(){
	return watch(['script/jsx/**/*.jsx'], {interval: 500}, function() {
		console.log(gulp.run(['jsx']));
	});
});


