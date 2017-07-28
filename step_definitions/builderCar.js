var expect = require('chai').expect;
var {defineSupportCode} = require('cucumber');
var builderCarPage = require('../po/page/builderCarPage');

defineSupportCode(({Given, When, Then}) => {
	Then(/^I check EcoBoost$/, function () {
		// let elem = element.all(by.cssContainingText('span', nameFilter)).first();
		// return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
		// 	return browser.executeScript("arguments[0].scrollIntoView()", elem);
		// }).then(() =>{
		// 	return elem.click();
		// });
		return builderCarPage.setFilterEcoBoost();
	});

	Then(/^I check SUV & Crossover$/, function () {
		// let elem = element.all(by.cssContainingText('span', nameFilter)).first();
		// return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
		// 	return browser.executeScript("arguments[0].scrollIntoView()", elem);
		// }).then(() =>{
		// 	return elem.click();
		// });
		return builderCarPage.setFilterSuvAndCrossover();
	});

	Then(/^I should choose EXPLORER$/, function () {
		// let elem = element.all(by.cssContainingText('strong', car)).first();
		// return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() => {
		// 	return browser.executeScript("arguments[0].scrollIntoView(false)", elem)
		// }).then(() =>{
		// 	return elem.click();
		// });
		return builderCarPage.setExplorer();
	});

	When(/^I should insert ZIP CODE 14304$/, function () {
		// let elem = element(by.css('div.zip-input-wrapper > input'));
		// return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() =>{
		// 	return browser.executeScript("arguments[0].scrollIntoView(false)", elem);
		// }).then(() => {
		// 	return elem.sendKeys(zipcode)
		// }).then(() => {
		// 	return browser.actions().sendKeys(protractor.Key.ENTER).perform();
		// });
		return builderCarPage.insertZipCode();
	});

	Then(/^I should see car$/, function () {
		// let elem = element(by.css('#main-container > div > div > div > div > div.row > div.cyp-ctas.col-xs-12.col-sm-6.build-your-own'));
		// return browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 5000).then(() =>{
		// 	return browser.executeScript("arguments[0].scrollIntoView(false)", elem);
		// }).then(() => {
		// 	return elem.click();
		// });
		return builderCarPage.showBuildYourOwnCar();
	});

	Then(/^I should see "([^"]*)" by "([^"]*)"$/, function (model, cost) {
		// let modelCar = element(by.css('#main-container > div > div > div.content-container.full-height.ng-scope > div > div:nth-child(6) > div.choose-model > div.col-sm-12.select-model-title > div > h2'));
		// return browser.wait(protractor.ExpectedConditions.visibilityOf(modelCar), 5000).then(() => {
		// 	return browser.executeScript("arguments[0].scrollIntoView()", modelCar);
		// }).then(() => {
		// 	element(by.css('#main-container > div > div > div.content-container.full-height.ng-scope > div > div:nth-child(6) > div.choose-model > div.col-sm-12.col-md-12.col-lg-4.choose-model-features-wrapper > div > div > div > div')).click();
		// });
		// }).then(() => {
		// 	element(by.css('div:nth-child(5) > div.model-price-mileage > span:nth-child(1) > div')).getText().then(res => {
		// 		expect(res).to.equal(cost)
		// 	});
		// });
		
		return builderCarPage.checkModel().then(resModel => {
			return expect(resModel).to.equal(model);
		}).then(() => {
			return builderCarPage.checkCost().then(resCost => {
				return expect(resCost).to.equal(cost);
			})
		})
	});

});
