var BasePage = require('./basePage');
var Helpers = require('../common/Helpers')

function CompareVehiles() {

	this.url = 'http://shop.ford.com/showroom?linktype=compare';

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
		return Helpers.findAndScrollAndClick(self.itemFilterEcoBoost);


	}

	this.setFilterSuvAndCrossover = function () {
		var self = this;
		return Helpers.findAndScrollAndClick(self.FilterSuvAndCrossover);
	}

	this.chooseExplorerForCompare = function () {
		var self = this;
		return Helpers.findAndScrollAndClickFalse(self.carExplorer);
	}

	this.chooseSecondCarForCompare = function () {
		var self = this;
		return Helpers.findAndScrollAndClickFalse(self.secondCarForCompare);
	}

	this.clickCompareButton = function () {
		var self = this;
		return Helpers.findAndScrollAndClickFalse(self.buttonOfCompare);
	}

	this.getCityConsumptionFirstModification = function () {
		var self = this;
		return Helpers.findAndScrollAndGetTextFalse(self.cityConsumptionFirstModification);
	}

	this.getCityConsumptionSecondModification = function () {
		var self = this;
		return Helpers.findAndScrollAndGetTextFalse(self.cityConsumptionSecondModification);
	}

	this.getHighwayConsumptionFirstModification = function () {
		var self = this;
		return Helpers.findAndScrollAndGetTextFalse(self.highwayConsumptionFirstModification);
	}

	this.getHighwayConsumptionSecondModification = function () {
		var self = this;
		return Helpers.findAndScrollAndGetTextFalse(self.highwayConsumptionSecondModification);
	}

}

CompareVehiles.prototype = BasePage;
module.exports = new CompareVehiles();
