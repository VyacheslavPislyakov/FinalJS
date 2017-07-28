var BasePage = require('./basePage');
var Helpers = require('../common/Helpers')

function BuilderCarPage() {

	this.url = 'https://www.ford.com/showroom?linktype=build';

	this.ZIPCODE = 14304;
	this.itemFilterEcoBoost = element(by.css('div:nth-child(3) > div > ul > li:nth-child(2) > span > span.txt-label.ng-binding'));
	this.FilterSuvAndCrossover = element(by.css('div:nth-child(4) > div > ul > li:nth-child(4) > span > span.txt-label.ng-binding'));
	this.carExplorer = element.all(by.css('div:nth-child(3) > div > div.vehicle-title > div > strong')).first();
	this.inputZipCode = element(by.css('div.zip-input-wrapper > input'));
	this.elementBuildYourOwnCar = element(by.css('#main-container > div > div > div > div > div.row > div.cyp-ctas.col-xs-12.col-sm-6.build-your-own > div > div > img'));
	this.imageOfTheCar = element(by.css('div:nth-child(5) > img'));
	this.elementModificationOfTheCar = element(by.css('div.flex-parent.flex-left > div:nth-child(5) > div.centered-text > h4 > a > span'));
	this.elementCostOfTheCar = element(by.css('div:nth-child(5) > div.model-price-mileage > span:nth-child(1) > div'));


	this.setFilterEcoBoost = function () {
		var self = this;
		return Helpers.findAndScrollAndClick(self.itemFilterEcoBoost);
	}

	this.setFilterSuvAndCrossover = function () {
		var self = this;
		return Helpers.findAndScrollAndClick(self.FilterSuvAndCrossover);
	}

	this.setExplorer = function () {
		var self = this;
		return Helpers.findAndScrollAndClickFalse(self.carExplorer);
	}

	this.insertZipCode = function () {
		var self = this;
		return Helpers.findAndScrollFalse(self.inputZipCode).then(() => {
			return self.inputZipCode.sendKeys(self.ZIPCODE)
		}).then(() => {
			return browser.actions().sendKeys(protractor.Key.ENTER).perform();
		});
	}

	this.showBuildYourOwnCar = function () {
		var self = this;
		return Helpers.findAndScrollAndClickFalse(self.elementBuildYourOwnCar);
	}

	this.checkModel = function () {
		var self = this;
		return Helpers.findAndScroll(self.imageOfTheCar).then(() => {
			return Helpers.findAndScrollAndGetText(self.elementModificationOfTheCar);
		})
	}

	this.checkCost = function () {
		var self = this;
		return Helpers.findAndScroll(self.imageOfTheCar).then(() => {
			return Helpers.findAndScrollAndGetText(self.elementCostOfTheCar);
		})
	}


}

BuilderCarPage.prototype = BasePage;
module.exports = new BuilderCarPage();
