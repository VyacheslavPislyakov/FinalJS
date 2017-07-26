exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),
	// globalTimeout: 300000,
	// pageTimeout: 300000,
	// allScriptsTimeout: 300000,
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

	onPrepare: function () {
	    browser.manage().window().setSize(1200, 900);
	}

};
