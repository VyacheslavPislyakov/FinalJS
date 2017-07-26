// // var provider = require('../po/page/poProvider');
// var advertisement = require('../po/common/advertisement')

var {defineSupportCode} = require('cucumber');
var poProvider = require('../po/page/poProvider')

defineSupportCode(({Given, When, Then}) => {
	Then(/^I submit on Locate a Dealer$/, function () {
		return element(by.id('IPEinvL')).isPresent().then(res => {
			if (res) {
				return element(by.id('no')).click();
			}
		}).then(() => {
			// let dealerships = element(by.xpath('/html/body/header/div[2]/nav/div/div[2]/ul[2]/li[2]/a'));
			return element(by.xpath('/html/body/header/div[2]/nav/div/div[2]/ul[2]/li[2]/a'));
			// var self = this;
		}).then(el => {
			return el.click();
		}).then(() => {
			return require('../po/page/dealerShipsPage');
		})
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
