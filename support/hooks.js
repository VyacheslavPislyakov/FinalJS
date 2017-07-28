var {defineSupportCode} = require('cucumber');

defineSupportCode(function({After, setDefaultTimeout}) {
	After(function() {
        return browser.executeScript('window.localStorage.clear();')
        .then(function () {
            browser.manage().deleteAllCookies();
        });
	});

	setDefaultTimeout(60 * 1000);
});
