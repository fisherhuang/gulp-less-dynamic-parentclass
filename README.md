# gulp-less-dynamic-parentclass
dynamic parentclass for less

we cae use this package to dynamic add less parentclass


var dynamicParentCls = require('gulp-less-dynamic-parentclass');
    

<pre>
<code>
var themes = ["test1", "test2"];
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
