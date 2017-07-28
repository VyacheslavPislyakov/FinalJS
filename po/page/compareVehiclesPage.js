var BasePage = require('./basePage');

function CompareVehiles() {

	this.url = 'http://shop.ford.com/showroom?linktype=compare&gnav=header-shop';

	this.itemFilterEcoBoost = element(by.css('div:nth-child(3) > div > ul > li:nth-child(2) > span > span.txt-label.ng-binding'));
	this.FilterSuvAndCrossover = element(by.css('div:nth-child(4) > div > ul > li:nth-child(4) > span > span.txt-label.ng-binding'));
	this.carExplorer = element.all(by.css('div:nth-child(3) > div > div.vehicle-title > div > strong')).first();
	this.secondCarForCompare = element.all(by.css('#trim384610 > div > div.image-checkbox > label > i')).first();
	this.buttonOfCompare = element.all(by.css('div:nth-child(1) > button')).first();
	this.cityConsumptionFirstModification = element(by.css('#detailed-comparison > div > table > tbody > tr:nth-child(10) > td.changecolor0 > div.title-small.car-detail'));
	this.cityConsumptionSecondModification = element(by.css('#detailed-comparison > div > table > tbody > tr:nth-child(10) > td.changecolor1 > div'));
	this.highwayConsumptionFirstModification = element(by.css('#detailed-comparison > div > table > tbody > tr:nth-child(11) > td.changecolor0 > div.title-small.car-detail'));
	this.highwayConsumptionSecondModification = element(by.css('#detailed-comparison > div > table > tbody > tr:nth-child(11) > td.changecolor1 > div'));


	this.setFilterEcoBoost = function () {
		var self = this;
		// let elem = element(by.css('div:nth-child(3) > div > ul > li:nth-child(2) > span > span.txt-label.ng-binding'));
		return browser.wait(protractor.ExpectedConditions.visibilityOf(self.itemFilterEcoBoost), 5000).then(() => {
			return browser.executeScript("arguments[0].scrollIntoView()", self.itemFilterEcoBoost);
		}).then(() =>{
			return self.itemFilterEcoBoost.click();
		});
	}

	this.setFilterSuvAndCrossover = function () {
		var self = this;
		// let elem = element(by.css('div:nth-child(4) > div > ul > li:nth-child(4) > span > span.txt-label.ng-binding'));
		return browser.wait(protractor.ExpectedConditions.visibilityOf(self.FilterSuvAndCrossover), 5000).then(() => {
			return browser.executeScript("arguments[0].scrollIntoView()", self.FilterSuvAndCrossover);
		}).then(() =>{
			return self.FilterSuvAndCrossover.click();
		});
	}

	this.chooseExplorerForCompare = function () {
		var self = this;
		return browser.wait(protractor.ExpectedConditions.visibilityOf(self.carExplorer), 5000).then(() => {
			return browser.executeScript("arguments[0].scrollIntoView(false)", self.carExplorer)
		}).then(() =>{
			return self.carExplorer.click();
		});
	}

	this.chooseSecondCarForCompare = function () {
		var self = this;
		// let elem = element.all(by.css('#trim384610 > div > div.image-checkbox > label > i')).first();
		return browser.wait(protractor.ExpectedConditions.visibilityOf(self.secondCarForCompare), 5000).then(() => {
			return browser.executeScript("arguments[0].scrollIntoView(false)", self.secondCarForCompare)
		}).then(() =>{
			return self.secondCarForCompare.click();
		});
	}

	this.clickCompareButton = function () {
		var self = this;
		// let elem = element.all(by.css('div:nth-child(1) > button')).first();
		return browser.wait(protractor.ExpectedConditions.visibilityOf(self.buttonOfCompare), 5000).then(() => {
			return browser.executeScript("arguments[0].scrollIntoView(false)", self.buttonOfCompare)
		}).then(() =>{
			return self.buttonOfCompare.click();
		});
	}

	this.getCityConsumptionFirstModification = function () {
		var self = this;
		return browser.wait(protractor.ExpectedConditions.visibilityOf(self.cityConsumptionFirstModification), 5000)
		.then(() => {
			return browser.executeScript("arguments[0].scrollIntoView(false)", self.cityConsumptionFirstModification)
		}).then(() =>{
			return self.cityConsumptionFirstModification.getText()
			.then(res => {
				// console.log('res ' + parseInt(res));
				return parseInt(res);
			})
		})
	}

	this.getCityConsumptionSecondModification = function () {
		var self = this;
		return browser.wait(protractor.ExpectedConditions.visibilityOf(self.cityConsumptionSecondModification), 5000)
		.then(() => {
			return browser.executeScript("arguments[0].scrollIntoView(false)", self.cityConsumptionSecondModification)
		}).then(() =>{
			return self.cityConsumptionSecondModification.getText()
			.then(res => {
				// console.log('res 2' + parseInt(res));
				return parseInt(res);
			})
		})
	}

	this.getHighwayConsumptionFirstModification = function () {
		var self = this;
		return browser.wait(protractor.ExpectedConditions.visibilityOf(self.highwayConsumptionFirstModification), 5000)
		.then(() => {
			return browser.executeScript("arguments[0].scrollIntoView(false)", self.highwayConsumptionFirstModification)
		}).then(() =>{
			return self.highwayConsumptionFirstModification.getText()
			.then(res => {
				// console.log('res ' + parseInt(res));
				return parseInt(res);
			})
		})
	}

	this.getHighwayConsumptionSecondModification = function () {
		var self = this;
		return browser.wait(protractor.ExpectedConditions.visibilityOf(self.highwayConsumptionSecondModification), 5000)
		.then(() => {
			return browser.executeScript("arguments[0].scrollIntoView(false)", self.highwayConsumptionSecondModification)
		}).then(() =>{
			return self.highwayConsumptionSecondModification.getText()
			.then(res => {
				// console.log('res 2' + parseInt(res));
				return parseInt(res);
			})
		})
	}

}

CompareVehiles.prototype = BasePage;
module.exports = new CompareVehiles();
