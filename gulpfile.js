'use strict'

var gulp = require('gulp'),
    minifycss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    webpack = require('webpack'),
    rename = require('gulp-rename'),
    rev = require('gulp-rev'),
    htmlmin = require('gulp-htmlmin'),
    del = require('del');

var config = require('./webpack.build.config');

/**
 *  清理生产目录文件
 */
gulp.task('clean', function(cb) {
    del(['./dist/*.js','./dist/js/*','./dist/*.map','./dist/img/*','./dist/css/*']).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
        cb();
    });
});


/**
 *  执行webpack打包
 */
gulp.task('webpack',['clean'], function(cb) {
    webpack(config, cb)
});

/**
 *  压缩css文件
 */
gulp.task('style',function() {
    //gulp.src('./dist/css/style.css')  不能写指定的某个文件名，会导致不能压缩，原因不明
    gulp.src('./dist/css/*.css')
    // .pipe(rename({suffix:'.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'))
    gulp.src('./img/*')
    .pipe(gulp.dest('./dist/css/img'))
});

/**
 *  压缩js文件
 */
gulp.task('script',function(){
    gulp.src('./dist/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
    
     gulp.src('./dist/lib/*.js')
    // .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/lib'));
});
gulp.task('html',function(){
    // var options = {
    //     collapseWhitespace:true,
    //     collapseBooleanAttributes:true,
    //     removeComments:true,
    //     removeEmptyAttributes:true,
    //     removeScriptTypeAttributes:true,
    //     removeStyleLinkTypeAttributes:true,
    //     minifyJS:true,
    //     minifyCSS:true
    // };
    // gulp.src('./dist/index.html')
    // .pipe(htmlmin(options))
    // .pipe(gulp.dest('dist/')); 
});
//一个包含任务列表的数组，这些任务会在你当前任务运行之前完成。
gulp.task('default', ['webpack'], function() {
    gulp.start('style','script','html')
})
