var expect = require('chai').expect;
var {defineSupportCode} = require('cucumber');
var PageFactory = require('../po/page/PageFactory');

defineSupportCode(({Given, When, Then}) => {
	When(/^I submit my location$/, function () {
		return PageFactory.getPage('dealerships').clickToLocateDealer();
	});

	Then(/^I should see a list of "([^"]*)"$/, function (result) {
		return PageFactory.getPage('dealerships').listResultsOfTheDealers()
		.then(res => {
			return expect(res).to.equal(result);
		})
	});

	Then(/^I should see the name of the first Dealer would be "([^"]*)"$/, function (firstName) {
		return PageFactory.getPage('dealerships').getTheNameOfTheFirstDealer()
		.then(res => {
			return expect(res).to.equal(firstName);
		})
	});

});
