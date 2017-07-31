var {defineSupportCode} = require('cucumber');
var PageFactory = require('../po/page/PageFactory');

defineSupportCode(({Given, When, Then}) => {
	Then(/^I submit on Locate a Dealer$/, function () {
		return PageFactory.getPage('home').clickToLocateDealer();
    });

	When(/^I should click build$/, function () {
		return PageFactory.getPage('build').clickToBuildAndPrice();
	});
});
