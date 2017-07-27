var {defineSupportCode} = require('cucumber');
var poProvider = require('../po/page/poProvider')
var homePage = require('../po/page/homePage');

defineSupportCode(({Given, When, Then}) => {
	Then(/^I submit on Locate a Dealer$/, function () {
		return homePage.clickToLocateDealer();
    });

	When(/^I should on Shopping Planner$/, function () {
		return element(by.id('IPEinvL')).isPresent().then(res => {
			if (res) {
				return element(by.id('no')).click();
			}
		}).then(() => {
			let elem = element(by.cssContainingText('span', 'Sign in'));
			return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
				return elem.click();
			})
		}).then(() => {
			let elem = element(by.css('li.user.open > ul > li:nth-child(1) > a'));
			return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
				return elem.click();
			})
		}).then(() => {
			// return require('../po/page/shoppingPlannerPage.js')
			return poProvider.getPageObjects('shoppingPlannerPage');
		});
	});
});
