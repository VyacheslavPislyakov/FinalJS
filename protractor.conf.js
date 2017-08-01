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
		browserName: process.env.BROWSER
	},

	onPrepare: function() {
		browser.manage().window().maximize();
		// browser.manage().window().setSize(1200, 900); //for Firefox
	}
};
