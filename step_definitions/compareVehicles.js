var assert = require('chai').assert;
var {defineSupportCode} = require('cucumber');

var compareVehiclesPage = require('../po/page/compareVehiclesPage');

defineSupportCode(({Given, When, Then}) => {
	When(/^I check EcoBoost for compare$/, function () {
		// let elem = element(by.css('div:nth-child(3) > div > ul > li:nth-child(2) > span > span.txt-label.ng-binding'));
		// return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
		// 	return browser.executeScript("arguments[0].scrollIntoView()", elem);
		// }).then(() =>{
		// 	return elem.click();
		// });
		return compareVehiclesPage.setFilterEcoBoost();
	});

	When(/^I check SUV & Crossover for compare$/, function () {
		// let elem = element(by.css('div:nth-child(4) > div > ul > li:nth-child(4) > span > span.txt-label.ng-binding'));
		// return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
		// 	return browser.executeScript("arguments[0].scrollIntoView()", elem);
		// }).then(() =>{
		// 	return elem.click();
		// });
		return compareVehiclesPage.setFilterSuvAndCrossover();
	});

	Then(/^I should choose EXPLORER for compare$/, function () {
		// let elem = element.all(by.css('div:nth-child(3) > div > div.vehicle-title > div > strong')).first();
		// return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
		// 	return browser.executeScript("arguments[0].scrollIntoView(false)", elem)
		// }).then(() =>{
		// 	return elem.click();
		// });
		return compareVehiclesPage.chooseExplorerForCompare();
	});

	When(/^I should choose second car for compare$/, function () {
		// let elem = element.all(by.css('#trim384610 > div > div.image-checkbox > label > i')).first();
		// return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
		// 	return browser.executeScript("arguments[0].scrollIntoView(false)", elem)
		// }).then(() =>{
		// 	return elem.click();
		// });
		return compareVehiclesPage.chooseSecondCarForCompare();
	});

	When(/^I should choose button for compare$/, function () {
		// let elem = element.all(by.css('div:nth-child(1) > button')).first();
		// return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
		// 	return browser.executeScript("arguments[0].scrollIntoView(false)", elem)
		// }).then(() =>{
		// 	return elem.click();
		// });
		return compareVehiclesPage.clickCompareButton();
	});

	Then(/^I should see results of compare$/, function () {
		// let elem = element(by.css('#detailed-comparison > div > table > tbody > tr:nth-child(10) > td.changecolor0 > div.title-small.car-detail'));
		// let elem2 = element(by.css('#detailed-comparison > div > table > tbody > tr:nth-child(10) > td.changecolor1 > div'));
		// let elem3 = element(by.css('#detailed-comparison > div > table > tbody > tr:nth-child(11) > td.changecolor0 > div.title-small.car-detail'));
		// let elem4 = element(by.css('#detailed-comparison > div > table > tbody > tr:nth-child(11) > td.changecolor1 > div'));
		// return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
		// 	return browser.executeScript("arguments[0].scrollIntoView(false)", elem)
		// }).then(() =>{
		// 	return elem.getText().then(res => {
		// 		return elem2.getText().then(res2 => {
		// 			// console.log(parseFloat(res.substring(1)));///TODO
		// 			// console.log(parseFloat(res2.substring(1)));///TODO
		// 			assert.isAbove(parseInt(res), parseInt(res2), 'Second car more economical fuel in city than first car');
		// 		})
		// 		// console.log(res.substring(1));
		// 	})

		// }).then(() => {
		// 	return browser.wait(protractor.ExpectedConditions.visibilityOf(elem3), 5000)
		// }).then(() => {
		// 	return browser.executeScript("arguments[0].scrollIntoView(false)", elem3)
		// }).then(() => {
		// 	return elem3.getText().then(res3 => {
		// 		return elem4.getText().then(res4 => {
		// 			// console.log(parseFloat(res.substring(1)));///TODO
		// 			// console.log(parseFloat(res2.substring(1)));///TODO
		// 			assert.isAbove(parseInt(res3), parseInt(res4), 'Second car more economical fuel in highway than first car');
		// 		})
		//

		return compareVehiclesPage.getCityConsumptionFirstModification()
		.then(res => {
			return compareVehiclesPage.getCityConsumptionSecondModification()
			.then(res2 => {
				return assert.isAbove(res, res2, 'Second car more economical fuel in city than first car')
			})
		}).then(() => {
			return compareVehiclesPage.getHighwayConsumptionFirstModification()
			.then(res => {
				return compareVehiclesPage.getHighwayConsumptionSecondModification()
				.then(res2 => {
					return assert.isAbove(res, res2, 'Second car more economical fuel in highway than first car')
				})
			})
		})
	});
});
