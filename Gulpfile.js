// For development => gulp
// For production  => gulp -p

// Call Plugins
var env         = require('minimist')(process.argv.slice(2)),
    gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    plumber     = require('gulp-plumber'),
    nunjucks    = require('gulp-nunjucks-html'),
    minifyHtml  = require('gulp-minify-html'),
    browserSync = require('browser-sync'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    gulpif      = require('gulp-if'),
    stylus      = require('gulp-stylus'),
    jeet        = require('jeet'),
    rupture     = require('rupture'),
    koutoSwiss  = require('kouto-swiss'),
    prefixer    = require('autoprefixer-stylus'),
    imagemin    = require('gulp-imagemin');

// Call Nunjucks for compile Templates
gulp.task('nunjucks', function(){
    return gulp.src('src/templates/*.html')
        .pipe(plumber())
        .pipe(nunjucks({
            searchPaths: ['src/templates']
        }))
        .pipe(gulpif(env.p, minifyHtml()))
        .pipe(gulp.dest('build/'));
});

// Call Uglify and Concat JS
gulp.task('js', function(){
    return gulp.src('src/js/**/*.js')
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(gulpif(env.p, uglify()))
        .pipe(gulp.dest('build/js'));
});

// Call Stylus
gulp.task('stylus', function(){
        gulp.src('src/styl/main.styl')
        .pipe(plumber())
        .pipe(stylus({
            use:[koutoSwiss(), prefixer(), jeet(),rupture()],
            compress: env.p
        }))
        .pipe(gulp.dest('build/css'));
});

// Call Imagemin
gulp.task('imagemin', function() {
    return gulp.src('src/img/**/*')
        .pipe(plumber())
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('build/img'));
});

// Call Watch
gulp.task('watch', function(){
    gulp.watch('src/templates/**/*.html', ['nunjucks']);
    gulp.watch('src/styl/**/*.styl', ['stylus']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/img/**/*.{jpg,png,gif}', ['imagemin']);
});


gulp.task('browser-sync', function () {
   var files = [
      'build/**/*.html',
      'build/css/**/*.css',
      'build/img/**/*',
      'build/js/**/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './build/'
      }
   });
});

// Default task
gulp.task('default', ['nunjucks', 'js', 'stylus', 'imagemin', 'watch', 'browser-sync']);