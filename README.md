# gulp-less-dynamic-parentclass
dynamic parent class name for less
# gulp-less-dynamic-parentclass
dynamic variables for less

we can use this package to dynamic add less parentclass


var dynamicParentCls = require('gulp-less-dynamic-parentclass');
    
var themes = ["test1", "test2"];

<pre>
<code>
themes.forEach((name, index) => {
    gulp.task(name, () => {
        return gulp.src([
            basePath + 'less/header.less',
            basePath + 'less/index.less'
        ]).pipe(
            dynamicParentCls({
                className: name
            })
        )
        .pipe(less({
            compress: false
        }))
        .pipe(concat('theme.css'))
        .pipe(gulp.dest(destPath + 'src/theme/' + name + ''));
        });
});
</code>
</pre>
<p> 1.className: the parent class name you need</p>



