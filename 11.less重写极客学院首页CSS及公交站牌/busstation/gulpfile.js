'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var less = require('gulp-less');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');
gulp.task('cssmin', function() {
     return gulp.src('./src/CSS/baidu.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({
            stream:true
        }));
});
gulp.task('concat', function () {
    gulp.src('./src/css/*.css')
        .pipe(concat('all.css'))//合并后的文件名
        .pipe(gulp.dest('dist/css'))
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
gulp.task('less', function () {
    gulp.src('src/css/station.less')
        .pipe(less())
        .pipe(cssmin()) 
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({
            stream:true
        }));
});
gulp.task('watch',function(){
        browserSync({
        server:{
            baseDir:['dist'],
        },
        },function(err,bs){});
    gulp.watch('./src/css/station.less',['less']);
	gulp.watch('./src/img/*.{png,jpg,gif,ico}', ['imgmin']);
	gulp.watch('./src/index.html', ['htmlmin']);
});
gulp.task('default', ['cssmin','concat','imgmin','htmlmin','less','watch']);
	

