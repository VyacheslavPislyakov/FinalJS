var assert = require('chai').assert;
var {defineSupportCode} = require('cucumber');

var compareVehiclesPage = require('../po/page/compareVehiclesPage');

defineSupportCode(({Given, When, Then}) => {
	When(/^I check EcoBoost for compare$/, function () {
		return compareVehiclesPage.setFilterEcoBoost();
	});

	When(/^I check SUV & Crossover for compare$/, function () {
		return compareVehiclesPage.setFilterSuvAndCrossover();
	});

	Then(/^I should choose EXPLORER for compare$/, function () {
		return compareVehiclesPage.chooseExplorerForCompare();
	});

	When(/^I should choose second car for compare$/, function () {
		return compareVehiclesPage.chooseSecondCarForCompare();
	});

	When(/^I should choose button for compare$/, function () {
		return compareVehiclesPage.clickCompareButton();
	});

	Then(/^I should see results of compare$/, function () {
		return compareVehiclesPage.getCityConsumptionFirstModification()
		.then(res => {
			return compareVehiclesPage.getCityConsumptionSecondModification()
			.then(res2 => {
				return assert.isAbove(parseInt(res), parseInt(res2), 'Second car more economical fuel in city than first car')
			})
		}).then(() => {
			return compareVehiclesPage.getHighwayConsumptionFirstModification()
			.then(res => {
				return compareVehiclesPage.getHighwayConsumptionSecondModification()
				.then(res2 => {
					return assert.isAbove(parseInt(res), parseInt(res2), 'Second car more economical fuel in highway than first car')
				})
			})
		})
	});
});
