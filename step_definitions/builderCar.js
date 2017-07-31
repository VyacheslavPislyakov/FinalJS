var expect = require('chai').expect;
var {defineSupportCode} = require('cucumber');
var PageFactory = require('../po/page/PageFactory');

defineSupportCode(({Given, When, Then}) => {
	Then(/^I check EcoBoost$/, function () {
		return PageFactory.getPage('build').setFilterEcoBoost();
	});

	Then(/^I check SUV & Crossover$/, function () {
		return PageFactory.getPage('build').setFilterSuvAndCrossover();
	});

	Then(/^I should choose EXPLORER$/, function () {
		return PageFactory.getPage('build').setExplorer();
	});

	When(/^I should insert ZIP CODE 14304$/, function () {
		return PageFactory.getPage('build').insertZipCode();
	});

	Then(/^I should see car$/, function () {
		return PageFactory.getPage('build').showBuildYourOwnCar();
	});

	Then(/^I should see "([^"]*)" by "([^"]*)"$/, function (model, cost) {
		return PageFactory.getPage('build').checkModel().then(resModel => {
			return expect(resModel).to.equal(model);
		}).then(() => {
			return PageFactory.getPage('build').checkCost().then(resCost => {
				return expect(resCost).to.equal(cost);
			})
		})
	});

});
