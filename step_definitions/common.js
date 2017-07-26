var homePage = require('../po/page/homePage');
var provider = require('../po/page/poProvider');

var {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, When, Then}) => {
	Given(/^I am on "([^"]*)" page$/, function (pageName) {
		return provider.getPageObjects(pageName).visit();
    });

});
