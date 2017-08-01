var inheritator = require('../../support/inheritance');
var BasePage = require('./BasePage');
var Helpers = require('../common/Helpers')

function BuilderCarPage() {

	this.url = 'https://www.ford.com/showroom?linktype=build';
	this.ZIPCODE = 14304;

	var elementsBuilderCarPage = {
		itemFilterEcoBoost: {
			locator: 'css',
			isSingle: false,
			value: 'li:nth-child(2) > span > span.txt-label.ng-binding'
		},
		FilterSuvAndCrossover: {
			locator: 'css',
			isSingle: false,
			value: 'li:nth-child(4) > span > span.txt-label.ng-binding'
		},
		carExplorer: {
			locator: 'css',
			isSingle: false,
			value: 'strong[data-ng-bind-template="EXPLORER"]'
		},
		inputZipCode: {
			locator: 'css',
			isSingle: true,
			value: 'div.zip-input-wrapper > input'
		},
		elementBuildYourOwnCar: {
			locator: 'css',
			isSingle: false,
			value: 'div.cta-panel > div > img'
		},
		imageOfTheCar: {
			locator: 'css',
			isSingle: true,
			value: 'div:nth-child(5) > img'
		},
		elementModificationOfTheCar: {
			locator: 'css',
			isSingle: true,
			value: 'div.centered-text > h4 > a > span'
		},
		elementCostOfTheCar: {
			locator: 'css',
			isSingle: true,
			value: 'div.model-price-mileage > span:nth-child(1) > div'
		},
	}

	this.setFilterEcoBoost = function () {
		var self = this;
		return Helpers.findAndScrollAndClick(Helpers.getElementsByCSS(elementsBuilderCarPage.itemFilterEcoBoost.value).first());
	}

	this.setFilterSuvAndCrossover = function () {
		var self = this;
		return Helpers.findAndScrollAndClick(Helpers.getElementsByCSS(elementsBuilderCarPage.FilterSuvAndCrossover.value).last());
	}

	this.setExplorer = function () {
		var self = this;
		return Helpers.findAndScrollAndClickFalse(Helpers.getElementsByCSS(elementsBuilderCarPage.carExplorer.value).first());
	}

	this.insertZipCode = function () {
		var self = this;
		return Helpers.findAndScrollFalse(Helpers.getElementByCSS(elementsBuilderCarPage.inputZipCode.value)).then(() => {
			return Helpers.getElementByCSS(elementsBuilderCarPage.inputZipCode.value).sendKeys(self.ZIPCODE)
		}).then(() => {
			return browser.actions().sendKeys(protractor.Key.ENTER).perform();
		});
	}

	this.showBuildYourOwnCar = function () {
		var self = this;
		return Helpers.findAndScrollAndClickFalse(Helpers.getElementsByCSS(elementsBuilderCarPage.elementBuildYourOwnCar.value).last());
	}

	this.checkModel = function () {
		var self = this;
		return Helpers.findAndScroll(Helpers.getElementByCSS(elementsBuilderCarPage.imageOfTheCar.value)).then(() => {
			return Helpers.findAndScrollAndGetText(Helpers.getElementsByCSS(elementsBuilderCarPage.elementModificationOfTheCar.value).last());
		})
	}

	this.checkCost = function () {
		var self = this;
		return Helpers.findAndScroll(Helpers.getElementByCSS(elementsBuilderCarPage.imageOfTheCar.value)).then(() => {
			return Helpers.findAndScrollAndGetText(Helpers.getElementsByCSS(elementsBuilderCarPage.elementCostOfTheCar.value).last());
		})
	}
}

inheritator.inherits(BasePage, BuilderCarPage);
module.exports = BuilderCarPage;
