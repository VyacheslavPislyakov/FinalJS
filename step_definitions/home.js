var {defineSupportCode} = require('cucumber');
var PageFactory = require('../po/page/PageFactory');

defineSupportCode(({Given, When, Then}) => {
	Given(/^I am on "([^"]*)" page$/, function (pageName) {
		return PageFactory.getPage(pageName).visit();
    });

	Then(/^I submit on Locate a Dealer$/, function () {
		return PageFactory.getPage('home').clickToLocateDealer();
    });

	When(/^I should click build$/, function () {
		return PageFactory.getPage('home').clickToBuildAndPrice();
	});
});
