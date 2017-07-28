var {defineSupportCode} = require('cucumber');
var homePage = require('../po/page/homePage');

defineSupportCode(({Given, When, Then}) => {
	Then(/^I submit on Locate a Dealer$/, function () {
		return homePage.clickToLocateDealer();
    });

	When(/^I should click build$/, function () {
		return homePage.clickToBuildAndPrice();
	});
});
