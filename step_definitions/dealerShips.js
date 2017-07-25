var DealerShips = function () {
	this.When(/^I submit my location$/, function () {
		var el = element(by.css('div.search.show-location > input'));
		return el.sendKeys('Washington')
		.then(() => {
			browser.actions().sendKeys(protractor.Key.ENTER).perform();
		});
	});

};

module.exports = DealerShips;
