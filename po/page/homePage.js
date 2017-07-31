var inheritator = require('../../support/inheritance');
var BasePage = require('./BasePage')
var Helpers = require('../common/Helpers')

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
			return Helpers.findAndScrollAndClickFalse(self.buttonLocateDealer);
		})
	}

	this.clickToBuildAndPrice = function() {
		let self = this;
		return this.closeBanner()
		.then(() => {
			return Helpers.findAndScrollAndClickFalse(self.buttonBuildAndPrice);
		})
	}
}

inheritator.inherits(BasePage, HomePage);

// HomePage.prototype = BasePage;
module.exports = HomePage;
