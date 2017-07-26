var BasePage = function () {
	this.visit = function () {
		browser.waitForAngularEnabled(false).then(() => {
			return browser.get(this.url);
		});
	};
};

module.exports = new BasePage();
