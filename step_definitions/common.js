var homePage = require('../po/page/homePage');
var PageFactory = require('../po/page/PageFactory');

var {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, When, Then}) => {
	Given(/^I am on "([^"]*)" page$/, function (pageName) {
		return PageFactory.getPage(pageName).visit();
    });
});
