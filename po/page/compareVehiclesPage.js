var inheritator = require('../../support/inheritance');
var BasePage = require('./BasePage');
var Helpers = require('../common/Helpers')

function CompareVehiles() {

	this.url = 'http://shop.ford.com/showroom?linktype=compare';

	var elementsCompareVehiclesPage = {
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
		secondCarForCompare: {
			locator: 'css',
			isSingle: false,
			value: '#trim384610 > div > div.image-checkbox > label > i'
		},
		buttonOfCompare: {
			locator: 'css',
			isSingle: false,
			value: 'div:nth-child(1) > button'
		},
		cityConsumptionFirstModification: {
			locator: 'css',
			isSingle: true,
			value: 'tr.d0:nth-child(10) > td:nth-child(2) > div:nth-child(2)'
		},
		cityConsumptionSecondModification: {
			locator: 'css',
			isSingle: true,
			value: 'tr.d0:nth-child(10) > td:nth-child(3) > div:nth-child(1)'
		},
		highwayConsumptionFirstModification: {
			locator: 'css',
			isSingle: true,
			value: 'tr.d1:nth-child(11) > td:nth-child(2) > div:nth-child(2)'
		},
		highwayConsumptionSecondModification: {
			locator: 'css',
			isSingle: true,
			value: 'tr.d1:nth-child(11) > td:nth-child(3) > div:nth-child(1)'
		},
	}

	this.setFilterEcoBoost = function () {
		var self = this;
		return Helpers.findAndScrollAndClick(Helpers.getElementsByCSS(elementsCompareVehiclesPage.itemFilterEcoBoost.value).first());
	}

	this.setFilterSuvAndCrossover = function () {
		var self = this;
		return Helpers.findAndScrollAndClick(Helpers.getElementsByCSS(elementsCompareVehiclesPage.FilterSuvAndCrossover.value).last());
	}

	this.chooseExplorerForCompare = function () {
		var self = this;
		return Helpers.findAndScrollAndClickFalse(Helpers.getElementsByCSS(elementsCompareVehiclesPage.carExplorer.value).first());
	}

	this.chooseSecondCarForCompare = function () {
		var self = this;
		return Helpers.findAndScrollAndClickFalse(Helpers.getElementsByCSS(elementsCompareVehiclesPage.secondCarForCompare.value).first());
	}

	this.clickCompareButton = function () {
		var self = this;
		return Helpers.findAndScrollAndClickFalse(Helpers.getElementsByCSS(elementsCompareVehiclesPage.buttonOfCompare.value).first());
	}

	this.getCityConsumptionFirstModification = function () {
		var self = this;
		return Helpers.findAndScrollAndGetTextFalse(Helpers.getElementByCSS(elementsCompareVehiclesPage.cityConsumptionFirstModification.value));
	}

	this.getCityConsumptionSecondModification = function () {
		var self = this;
		return Helpers.findAndScrollAndGetTextFalse(Helpers.getElementByCSS(elementsCompareVehiclesPage.cityConsumptionSecondModification.value));
	}

	this.getHighwayConsumptionFirstModification = function () {
		var self = this;
		return Helpers.findAndScrollAndGetTextFalse(Helpers.getElementByCSS(elementsCompareVehiclesPage.highwayConsumptionFirstModification.value));
	}

	this.getHighwayConsumptionSecondModification = function () {
		var self = this;
		return Helpers.findAndScrollAndGetTextFalse(Helpers.getElementByCSS(elementsCompareVehiclesPage.highwayConsumptionSecondModification.value));
	}

}

inheritator.inherits(BasePage, CompareVehiles);
module.exports = CompareVehiles;
