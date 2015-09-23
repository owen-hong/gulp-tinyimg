# gulp-tinyimg

##安装

```bash
npm install gulp-tinyimg
```


##使用
<p>
先到 [tinypng developers](https://tinypng.com/developers) 申请开发者 API key，每个月有500张免费使用的机会。
</p>
```javascript
var gulp = require('gulp');
var tinyimg = require('gulp-tinyimg');
gulp.task('tinyimg',function(){
    return gulp.src('images/*.png')
        .pipe(tinyimg('you API key'))
        .pipe(gulp.dest('images/dist'));
});
```


##功能
* 集成了tinypng压缩png功能
* 集成了tinyjpg压缩jpg功能
