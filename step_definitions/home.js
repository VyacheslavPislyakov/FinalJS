// var provider = require('../po/page/poProvider');
var HomeSteps = function () {

	// this.Given(/^I am on "([^"]*)" page$/, function (pageName) {
	// 	return provider.getPageObjects(pageName).visit();
    // });

	this.Then(/^I submit on Locate a Dealer$/, function () {
		element(by.id('IPEinvL')).isPresent().then(res => {
			if (res) {
				// console.log(res);
				element(by.id('no')).click();
			}
		});
		this.dealerships = element(by.xpath('/html/body/header/div[2]/nav/div/div[2]/ul[2]/li[2]/a'));
		var self = this;
		return self.dealerships.click()
			.then(() => {
				return require('../po/page/dealerShipsPage');
			});
    });
}

module.exports = HomeSteps;
