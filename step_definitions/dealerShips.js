var expect = require('chai').expect;
var {defineSupportCode} = require('cucumber');

var dealershipsPage = require('../po/page/dealerShipsPage');

defineSupportCode(({Given, When, Then}) => {
	When(/^I submit my location$/, function () {
		return dealershipsPage.clickToLocateDealer();
	});

	Then(/^I should see a list of "([^"]*)"$/, function (result) {
		return dealershipsPage.listResultsOfTheDealers()
		.then(res => {
			return expect(res).to.equal(result);
		})
	});

	Then(/^I should see the name of the first Dealer would be "([^"]*)"$/, function (firstName) {
		return dealershipsPage.getTheNameOfTheFirstDealer()
		.then(res => {
			return expect(res).to.equal(firstName);
		})
	});

});
