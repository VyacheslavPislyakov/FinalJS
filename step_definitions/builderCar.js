var expect = require('chai').expect;
var {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, When, Then}) => {
	Then(/^I check "([^"]*)"$/, function (nameFilter) {
		let elem = element.all(by.cssContainingText('span', nameFilter)).first();
		return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
			return browser.executeScript("arguments[0].scrollIntoView()", elem);
		}).then(() =>{
			return elem.click();
		});
	});
	Then(/^I should choose "([^"]*)"$/, function (car) {
		let elem = element.all(by.cssContainingText('strong', car)).first();
		return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000)
		.then(() => {
			return browser.executeScript("arguments[0].scrollIntoView(false)", elem)
			.then(() => {
				return browser.sleep(5000);
			});
		}).then(() =>{
			return elem.click();
		});
	});

	When(/^I should insert ZIP CODE "([^"]*)"$/, function (zipcode) {
		let elem = element(by.css('div.zip-input-wrapper > input'));
		return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() =>{
			return elem.sendKeys(zipcode)
		}).then(() => {
			return browser.actions().sendKeys(protractor.Key.ENTER).perform();
		});
	});

	Then(/^I should see cars$/, function () {
		let elem = element(by.css('#main-container > div > div > div > div > div.row > div.cyp-ctas.col-xs-12.col-sm-6.build-your-own > div > div > img'));
		return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000)
		.then(() =>{
			return elem.click();
		});
	});

	Then(/^I should see "([^"]*)" by "([^"]*)"$/, function (model, cost) {
		let elem = element(by.css('div:nth-child(5) > img'));
		return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
			return browser.executeScript("arguments[0].scrollIntoView()", elem);
		}).then(() => {
			element(by.css('div.flex-parent.flex-left > div:nth-child(5) > div.centered-text > h4 > a > span')).getText().then(res => {
				// console.log(res);////expect
				expect(res).to.equal(model)
			});
		}).then(() => {
			element(by.css('div:nth-child(5) > div.model-price-mileage > span:nth-child(1) > div')).getText().then(res => {
				// console.log(res);////expect53,235
				expect(res).to.equal(cost)
			});
		});
	});

});
