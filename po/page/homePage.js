var inheritator = require('../../support/inheritance');
var BasePage = require('./BasePage')
var Helpers = require('../common/Helpers')

function HomePage() {


	this.url = 'http://www.ford.com/';

	this.banner = element(by.id('IPEinvL'));
	this.bannerButtonNo = element(by.id('no'));
	// this.buttonLocateDealer  = element.all(by.css('li.lad> a > span:nth-child(2)')).first();
	// this.buttonBuildAndPrice = element.all(by.css('h5.billboard-cta.text-center.m-text-center.col-xs-12')).last();

	var elementsHomePage = {
		buttonLocateDealer: {
			locator: 'css',
			isSingle: false,
			value: 'li.lad:nth-child(2) > a:nth-child(1) > span:nth-child(2)'
		},
		buttonBuildAndPrice: {
			locator: 'css',
			isSingle: false,
			value: 'h5.billboard-cta.text-center.m-text-center.col-xs-12'
		},
	}

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
			return Helpers.findAndScrollAndClickFalse(Helpers.getElementsByCSS(elementsHomePage.buttonLocateDealer.value).first());
		})
	}

	this.clickToBuildAndPrice = function() {
		let self = this;
		return this.closeBanner()
		.then(() => {
			return Helpers.findAndScrollAndClickFalse(Helpers.getElementsByCSS(elementsHomePage.buttonBuildAndPrice.value).last());
		})
	}
}

inheritator.inherits(BasePage, HomePage);
module.exports = HomePage;
