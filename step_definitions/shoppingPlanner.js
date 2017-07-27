var {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When}) => {
	When('I should build the car', function () {
		let elem = element(by.css('#spl-container > div.ng-scope > div > div > div:nth-child(3) > div > div:nth-child(1) > div > div.call-to-action.section > div > a'));
		return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
			browser.executeScript("arguments[0].scrollIntoView(false)", elem);
		}).then(() => {
			return elem.click();
		});
	});
});
