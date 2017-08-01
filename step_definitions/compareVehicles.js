var assert = require('chai').assert;
var {defineSupportCode} = require('cucumber');

var PageFactory = require('../po/page/PageFactory');

defineSupportCode(({Given, When, Then}) => {
	When(/^I check EcoBoost for compare$/, function () {
		return PageFactory.getPage('compare').setFilterEcoBoost();
	});

	When(/^I check SUV & Crossover for compare$/, function () {
		return PageFactory.getPage('compare').setFilterSuvAndCrossover();
	});

	Then(/^I should choose EXPLORER for compare$/, function () {
		return PageFactory.getPage('compare').chooseExplorerForCompare();
	});

	When(/^I should choose second car for compare$/, function () {
		return PageFactory.getPage('compare').chooseSecondCarForCompare();
	});

	When(/^I should choose button for compare$/, function () {
		return PageFactory.getPage('compare').clickCompareButton();
	});

	Then(/^I should see results of compare$/, function () {
		return PageFactory.getPage('compare').getCityConsumptionFirstModification()
		.then(res => {
			return PageFactory.getPage('compare').getCityConsumptionSecondModification()
			.then(res2 => {
				return assert.isAbove(parseInt(res), parseInt(res2), 'Second car more economical fuel in city than first car')
			})
		}).then(() => {
			return PageFactory.getPage('compare').getHighwayConsumptionFirstModification()
			.then(res => {
				return PageFactory.getPage('compare').getHighwayConsumptionSecondModification()
				.then(res2 => {
					return assert.isAbove(parseInt(res), parseInt(res2), 'Second car more economical fuel in highway than first car')
				})
			})
		})
	});
});
