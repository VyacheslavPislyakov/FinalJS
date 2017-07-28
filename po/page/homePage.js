var BasePage = require('./basePage')

function HomePage() {
	this.url = 'http://www.ford.com/';

	this.banner = element(by.id('IPEinvL'));
	this.bannerButtonNo = element(by.id('no'));
	this.buttonLocateDealer  = element(by.xpath('/html/body/header/div[2]/nav/div/div[2]/ul[2]/li[2]/a'));
	this.buttonBuildAndPrice = element(by.css('div.billboard-content > div > div > div > h5 > a'));


	this.closeBanner = function() {
		let self = this;
		return self.banner.isPresent().then(res => {
			if (res) {
				return self.bannerButtonNo.click();
			}
		})
	}

	this.clickToLocateDealer = function () {
		let self = this;
		return this.closeBanner()
		.then(() => {
			return browser.wait(protractor.ExpectedConditions.visibilityOf(self.buttonLocateDealer), 5000).then(() => {
				return browser.executeScript("arguments[0].scrollIntoView(false)", self.buttonLocateDealer);
			}).then(() => {
				return self.buttonLocateDealer.click();
			})
		})
	}

	this.clickToBuildAndPrice = function() {
		let self = this;
		return this.closeBanner()
		.then(() => {
			return browser.wait(protractor.ExpectedConditions.visibilityOf(self.buttonBuildAndPrice), 5000).then(() => {
				return browser.executeScript("arguments[0].scrollIntoView(false)", self.buttonBuildAndPrice);
			}).then(() => {
				return self.buttonBuildAndPrice.click();
			})
		})
	}
}

HomePage.prototype = BasePage;
module.exports = new HomePage();
