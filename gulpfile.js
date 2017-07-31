var gulp = require('gulp');
var protractor = require('gulp-protractor').protractor;
var util = require('gulp-util');

gulp.task('runTest', function() {
	util.env.browser ? process.env.BROWSER = util.env.browser : process.env.BROWSER = 'chrome';
	util.env.view ? process.env.VIEW = util.env.view : process.env.VIEW = 'desktop';
	return gulp.src('features/*.feature')
	.pipe(protractor({
		configFile: "protractor.conf.js",
			args: ['--baseUrl', 'http://127.0.0.1:8000']
		}))
		.on('end', function () {
			console.log('In the END');
		})
});
