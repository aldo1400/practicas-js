import gulp from 'gulp';
import babel from 'gulp-babel';

// const gulp=require('gulp');

gulp.task('es6',()=>{
    gulp.src('./es6/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./es5'))
});

gulp.task('default',()=>{
    gulp.watch('./es6/*.js',['es6'])
});
// gulp.src();
// gulp.dest();
// gulp.watch();


// gulp.task() CREA UNA NUEVA TAREA 
// gulp.src() directorio actual
// gulp.dest(); directorio destino
// gulp.watch(); observa cambios