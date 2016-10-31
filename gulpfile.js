'use strict';
 //引入包
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var jsmin = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
//创建task
//目地:编辑sass
gulp.task('buildSass',function(){
	//查找sass文件
	return gulp.src('./app/sass/*.scss')
	//输出未压缩版本
	.pipe(sass({outputStyle:'compact'}))
	.pipe(gulp.dest('./app/css'))
	//把文档流输入出到gulp-sass进行编辑
	//压缩文件并改名
	.pipe(sass({outputStyle:'compressed'}))
	.pipe(rename({suffix:'.min'}))
	//输出文件
	.pipe(gulp.dest('./app/css'))
	
		// 输出文件后可以确定css完成编译
		// 刷新操作一定要在编译完成后进行
		.pipe(browserSync.reload({stream:true}));
})
//监听sass文件修改，自动编辑
gulp.task('jtSass',function(){
	//只要sass文件有修改，就自动执行buildSass任务
	gulp.watch('./app/sass/*.scss',['buildSass'])
})
// 运行任务（全局安装为了运行gulp任务）
// 在命令提示符进行
// 格式：gulp 任务名

// 同步测试

// 创建一个任务
gulp.task('server',['jtSass'],function(){
	browserSync.init({
		server:{
			baseDir:'./app'
		},
		
		// 监听文件修改并自动刷新
		// **代表任意目录
		// *代表任意文件名
		files:['./app/**/*.html','./app/css/*.css','./app/js/*.js']
	})
	
})

//js自动化处理
gulp.task('buildjs',function(){
	gulp.src('./app/js/*.js')
	
	//合并js
	.pipe(concat('app.js'))
	.pipe(gulp.dest('./app/js'))
	
	//压缩
	.pipe(jsmin({
		mangle:true
	}))
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('./dist/js'))
})

//压缩html文件
gulp.task('buildhtml',function(){
	// 匹配所有的html文件，包括子目录下的html文件
	gulp.src('./app/**/*.html')

		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))

		.pipe(gulp.dest('./dist/'))
})


// 全站编译
gulp.task('default',['buildSass','server','jtSass','buildjs','buildhtml']);