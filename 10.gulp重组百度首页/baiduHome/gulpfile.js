'use strict';
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');
gulp.task('jsmin', function() {
     return gulp.src('./src/js/bd.js')
     	.pipe(uglify())
     	.pipe(gulp.dest('./dist/js'))
     	.pipe(browserSync.reload({
     		stream:true
     	}));
});
gulp.task('cssmin', function() {
     return gulp.src('./src/CSS/baidu.css')
     	.pipe(cssmin())
     	.pipe(gulp.dest('./dist/css'))
     	.pipe(browserSync.reload({
     		stream:true
     	}));
});
gulp.task('imgmin', function() {
     return gulp.src('./src/img/*.{png,jpg,gif,ico}')
     	.pipe(cssmin())
     	.pipe(gulp.dest('./dist/img'))
     	.pipe(browserSync.reload({
     		stream:true
     	}));
});
gulp.task('htmlmin', function() {
     return gulp.src('./src/index.html')
     	.pipe(htmlmin({
     		collapseWhitespace:true,
     		removeComment:true
     	}))
     	.pipe(gulp.dest('./dist'))
     	.pipe(browserSync.reload({
     		stream:true
     	}));
});
gulp.task('serve',function(){
	browserSync({
		server:{
			baseDir:['dist'],
		},
		},function(err,bs){});
	gulp.watch('./src/js/bd.js', ['jsmin']);
	gulp.watch('./src/CSS/baidu.css', ['cssmin']);
	gulp.watch('./src/img/*.{png,jpg,gif,ico}', ['imgmin']);
	gulp.watch('./src/index.html', ['htmlmin']);
});
	

