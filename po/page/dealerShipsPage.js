var BasePage = require('./basePage');
var Helpers = require('../common/Helpers')

function DealerShipsPage() {
	this.url = 'https://owner.ford.com/dealer-locator.html#/';

	this.inputElement = element(by.css('#dealerSearchBox'));
	this.results = element(by.css('span:nth-child(10) > span.ng-binding'));
	this.firstNameOfTheDealer = element(by.css('li.fls-dealer-search-results-item.scroll-item-0 > div > h3 > a'));
	this.ZIPCODE = 14304;

	this.clickToLocateDealer = function() {
		var self = this;
		// return browser.wait(protractor.ExpectedConditions.presenceOf(self.inputElement), 5000).then(() => {
		// 	return browser.executeScript("arguments[0].scrollIntoView()", self.inputElement);
		// }).then(() => {
		return Helpers.findAndScroll(self.inputElement).then(() => {
			return self.inputElement.sendKeys(self.ZIPCODE);
		}).then(() => {
			return browser.actions().sendKeys(protractor.Key.ENTER).perform();
		});
	}

	this.listResultsOfTheDealers = function() {
		var self = this;
		// return browser.wait(protractor.ExpectedConditions.presenceOf(self.results), 5000).then(() => {
		// 	return browser.executeScript("arguments[0].scrollIntoView()", self.results);
		// }).then(() => {
		// 	return self.results.getText().then(res => {
		// 		return res;
		// 	});
		// })
		return Helpers.findAndScrollAndGetText(self.results);
	}

	this.getTheNameOfTheFirstDealer = function() {
		var self = this;
		// return browser.wait(protractor.ExpectedConditions.visibilityOf(self.firstNameOfTheDealer), 5000).then(() => {
		// 	return browser.executeScript("arguments[0].scrollIntoView(true)", self.firstNameOfTheDealer);
		// }).then(() => {
		// 	return self.firstNameOfTheDealer.getText().then(res => {
		// 		return res;
		// 	})
		// });
		return Helpers.findAndScrollAndGetText(self.firstNameOfTheDealer);
	}
}

DealerShipsPage.prototype = BasePage;
module.exports = new DealerShipsPage();
