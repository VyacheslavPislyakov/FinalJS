exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),
	specs: [
		'features/*.feature'
	],
	cucumberOpts: {
		require: [
			'step_definitions/*.js',
			'support/*.js',
		],
		format: 'pretty'
	},
	capabilities: {
		browserName: 'chrome'
	},

	onPrepare: function() {
		browser.manage().window().maximize();
	}


	// var gulp = require('gulp'),
	// 	cucumber = require('gulp-cucumber');
	// gulp.task('cucumber', function() {
	// 	util.env.browser ? process.env.BROWSER = util.env.browser : process.env.BROWSER = 'chrome';
	// 	util.env.view ? process.env.VIEW = util.env.view : process.env.VIEW = 'desktop';
	// 	return gulp.src('test/features/*').pipe(cucumber({
	// 		'steps': 'step_definitions/*.js',
	// 		'support': 'support/*.js',
	// 	}));
	// });

	


};
