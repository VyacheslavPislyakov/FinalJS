var expect = require('chai').expect;
var {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, When, Then}) => {
	When(/^I submit my location$/, function () {
		var el = element(by.css('div.search.show-location > input'));
		return el.sendKeys('Washington')
		.then(() => {
			return browser.actions().sendKeys(protractor.Key.ENTER).perform();
		});
	});

	Then(/^I should see a list of 2 Dealers near me$/, function () {
		let el = element.all(by.css('div.tab-content.dealers > ul > li'));
		return browser.wait(protractor.ExpectedConditions.presenceOf(el), 5000).then(() => {
			return el.count().then(res => {
				return expect(res).to.equal(2);
				// console.log(res);
			});
		})
	});

	Then(/^I should see the name of the first Dealer would be "([^"]*)"$/, function (txt) {
		let el = element.all(by.css('#ford-dealer-results > div.tabs-content > div.tab-content.dealers > ul > li.dealer.summary.ng-scope.current > div > div.content > h3')).first();
		let el1 = element(by.css('#labelCanvasId'));
		return browser.wait(protractor.ExpectedConditions.visibilityOf(el), 5000).then(() => {
			return el.getText().then(res => {
				// console.log('res' + res);
				// browser.sleep(5000);
				return expect(res).to.equal(txt);
			})
		});
	});

});
