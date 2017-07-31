var inheritator = require('../../support/inheritance');
var BasePage = require('./BasePage');
var Helpers = require('../common/Helpers');

function DealerShipsPage() {
	this.url = 'https://owner.ford.com/dealer-locator.html#/';

	var elementsDealerShipsPage = {
		inputElement: {
			locator: 'css',
			isSingle: true,
			value: 'input.ng-invalid'
		},
		results: {
			locator: 'css',
			isSingle: true,
			value: '.label.ng-binding.ng-scope'
		},
		firstNameOfTheDealer: {
			locator: 'css',
			isSingle: true,
			value: 'li.dealer:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)'
		}
	}

	this.ZIPCODE = 14304;

	this.clickToLocateDealer = function() {
		var self = this;
		return Helpers.findAndScroll(Helpers.getElementByCSS(elementsDealerShipsPage.inputElement.value)).then(() => {
			return Helpers.getElementByCSS(elementsDealerShipsPage.inputElement.value).sendKeys(self.ZIPCODE);
		}).then(() => {
			return browser.actions().sendKeys(protractor.Key.ENTER).perform();
		});
	}

	this.listResultsOfTheDealers = function() {
		var self = this;
		return Helpers.findAndScrollAndGetText(Helpers.getElementByCSS(elementsDealerShipsPage.results.value));

	}

	this.getTheNameOfTheFirstDealer = function() {
		var self = this;
		return Helpers.findAndScrollAndGetText(Helpers.getElementByCSS(elementsDealerShipsPage.firstNameOfTheDealer.value));
	}
}

inheritator.inherits(BasePage, DealerShipsPage);
module.exports = DealerShipsPage;
