'use strict';

const
  gulp = require('gulp'),
  sass = require('gulp-sass')(require('sass')),
  mincss = require('gulp-clean-css');

const paths = {
  scss: './src/main.scss',
  prod: './prod/'
};

gulp.task('build', () => {
  return gulp.src(paths.scss)
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError), sass().on('error', sass.logError))
    .pipe(mincss({
      compatibility: "*", level: {
        1: {
          specialComments: 0,
          removeEmpty: true,
          removeWhitespace: true
        },
        2: {
          removeEmpty: true,
          removeDuplicateRules: true,
          removeUnusedAtRules: false
        }
      }
    })) 
    .pipe(gulp.dest(paths.prod))
});