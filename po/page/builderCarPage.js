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
		// return browser.wait(protractor.ExpectedConditions.visibilityOf(self.itemFilterEcoBoost), 5000).then(() => {
		// 	return browser.executeScript("arguments[0].scrollIntoView()", self.itemFilterEcoBoost);
		// }).then(() =>{
		// 	return self.itemFilterEcoBoost.click();
		// });
		return Helpers.findAndScrollAndClick(self.itemFilterEcoBoost);
	}

	this.setFilterSuvAndCrossover = function () {
		var self = this;
		// return browser.wait(protractor.ExpectedConditions.visibilityOf(self.FilterSuvAndCrossover), 5000).then(() => {
		// 	return browser.executeScript("arguments[0].scrollIntoView()", self.FilterSuvAndCrossover);
		// }).then(() =>{
		// 	return self.FilterSuvAndCrossover.click();
		// });
		return Helpers.findAndScrollAndClick(self.FilterSuvAndCrossover);
	}

	this.setExplorer = function () {
		var self = this;
		// return browser.wait(protractor.ExpectedConditions.visibilityOf(self.carExplorer), 5000).then(() => {
		// 	return browser.executeScript("arguments[0].scrollIntoView(false)", self.carExplorer)
		// }).then(() =>{
		// 	return self.carExplorer.click();
		// });

		return Helpers.findAndScrollAndClickFalse(self.carExplorer);
	}

	this.insertZipCode = function () {
		var self = this;
		return browser.wait(protractor.ExpectedConditions.visibilityOf(self.inputZipCode), 5000).then(() =>{
			return browser.executeScript("arguments[0].scrollIntoView(false)", self.inputZipCode);
		}).then(() => {
			return self.inputZipCode.sendKeys(self.ZIPCODE)
		}).then(() => {
			return browser.actions().sendKeys(protractor.Key.ENTER).perform();
		});


	}

	this.showBuildYourOwnCar = function () {
		var self = this;
		// return browser.wait(protractor.ExpectedConditions.visibilityOf(self.elementBuildYourOwnCar), 5000).then(() =>{
		// 	return browser.executeScript("arguments[0].scrollIntoView(false)", self.elementBuildYourOwnCar);
		// }).then(() => {
		// 	return self.elementBuildYourOwnCar.click();
		// });

		return Helpers.findAndScrollAndClickFalse(self.elementBuildYourOwnCar);
	}

	this.checkModel = function () {
		var self = this;
		// return browser.wait(protractor.ExpectedConditions.visibilityOf(self.imageOfTheCar), 5000).then(() => {
		// 	return browser.executeScript("arguments[0].scrollIntoView()", self.imageOfTheCar);
		// }).then(() => {
		// 	return browser.wait(protractor.ExpectedConditions.visibilityOf(self.elementModificationOfTheCar), 5000).then(() => {
		// 		return browser.executeScript("arguments[0].scrollIntoView()", self.elementModificationOfTheCar);
		// 	}).then(() => {
		// 		return self.elementModificationOfTheCar.getText().then(res => {
		// 			return res;
		// 		})
		// 	});
		// })

		return Helpers.findAndScroll(self.imageOfTheCar).then(() => {
			return Helpers.findAndScrollAndGetText(self.elementModificationOfTheCar);
		})
	}

	this.checkCost = function () {
		var self = this;
		// return browser.wait(protractor.ExpectedConditions.visibilityOf(self.imageOfTheCar), 5000).then(() => {
		// 	return browser.executeScript("arguments[0].scrollIntoView()", self.imageOfTheCar);
		// })
		// .then(() => {
		// 	return browser.wait(protractor.ExpectedConditions.visibilityOf(self.elementCostOfTheCar), 5000).then(() => {
		// 		return browser.executeScript("arguments[0].scrollIntoView()", self.elementCostOfTheCar);
		// 	}).then(() => {
		// 		return self.elementCostOfTheCar.getText().then(res => {
		// 			return res
		// 		});
		// 	})
		// });

		return Helpers.findAndScroll(self.imageOfTheCar).then(() => {
			return Helpers.findAndScrollAndGetText(self.elementCostOfTheCar);
		})
	}


}

BuilderCarPage.prototype = BasePage;
module.exports = new BuilderCarPage();
