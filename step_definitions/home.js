var {defineSupportCode} = require('cucumber');
var poProvider = require('../po/page/poProvider')
var homePage = require('../po/page/homePage');

defineSupportCode(({Given, When, Then}) => {
	Then(/^I submit on Locate a Dealer$/, function () {
		return homePage.clickToLocateDealer();
    });

	When(/^I should click build$/, function () {
		return homePage.clickToBuildAndPrice();
	});

	When(/^I should click Shop$/, function () {
		return element(by.id('IPEinvL')).isPresent().then(res => {
			if (res) {
				return element(by.id('no')).click();
			}
		}).then(() => {
			let elem = element(by.css('ul:nth-child(1) > li.dropdown.drop-parent.shop > a'));
			return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
				return browser.executeScript("arguments[0].scrollIntoView(false)", elem);
			}).then(() => {
				return elem.click();
			})
		}).then(() => {
			let elem = element.all(by.css('div > nav > div > div > div:nth-child(1) > ul > li:nth-child(4) > a')).first();
			return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
				return browser.executeScript("arguments[0].scrollIntoView(false)", elem);
			}).then(() => {
				return elem.click();
			})
		})
	});


	// When(/^I should choose a car$/, function () {
	// 	return element(by.id('IPEinvL')).isPresent().then(res => {
	// 		if (res) {
	// 			return element(by.id('no')).click();
	// 		}
	// 	}).then(() => {
	// 		let elem = element(by.css('div.navbar-collapse.collapse > ul:nth-child(1) > li.drop-parent.vehicles > a'));
	// 		return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
	// 			return browser.executeScript("arguments[0].scrollIntoView()", elem);
	// 		}).then(() => {
	// 			return elem.click();
	// 		})
	// 	}).then(() => {
	// 		let elem = element.all(by.cssContainingText('span', 'SUVs & Crossovers')).first();
	// 		return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
	// 			return browser.executeScript("arguments[0].scrollIntoView()", elem);
	// 		}).then(() => {
	// 			return elem.click();
	// 		})
	// 	}).then(() => {
	// 		let elem = element.all(by.css('ul.tertiary_menu.tertiary_menu_1.nav.navbar-nav.vehicles > li:nth-child(5) > a')).first();
	// 		return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
	// 			return browser.executeScript("arguments[0].scrollIntoView()", elem);
	// 		}).then(() => {
	// 			return elem.click();
	// 		})
	// 	}).then(() => {
	// 		let elem = element(by.css('#component47 > div > div > div > div > ul > li:nth-child(5) > a.model-img'));
	// 		return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
	// 			return browser.executeScript("arguments[0].scrollIntoView(false)", elem);
	// 		}).then(() => {
	// 			return elem.click();
	// 		})
	// 	}).then(() => {
	// 		let elem = element(by.css('#kba-list > div:nth-child(1) > div.kba-icon.col-xs-2.col-sm-12 > a'));
	// 		return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
	// 			return browser.executeScript("arguments[0].scrollIntoView(false)", elem);
	// 		}).then(() => {
	// 			return elem.click();
	// 		})
	// 	}).then(() => {
	// 		let elem = element(by.css('div.zip-input-wrapper > input'));
	// 		return browser.wait(protractor.ExpectedConditions.presenceOf(elem), 5000).then(() => {
	// 			return browser.executeScript("arguments[0].scrollIntoView(false)", elem);
	// 		}).then(() => {
	// 			return elem.sendKeys(14304);
	// 		}).then(() => {
	// 			return browser.actions().sendKeys(protractor.Key.ENTER).perform();
	// 		});
	// 	// }).then(() => {
	// 	// 	// return require('../po/page/shoppingPlannerPage.js')
	// 	// 	return poProvider.getPageObjects('shoppingPlannerPage');
	// 	});
	// });

});
