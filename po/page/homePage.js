var BasePage = require('./basePage')

function HomePage() {
	this.url = 'http://www.ford.com/';
	
	this.banner = element(by.id('IPEinvL'));
	this.button  = element(by.xpath('/html/body/header/div[2]/nav/div/div[2]/ul[2]/li[2]/a'));
	this.buttonNo = element(by.id('no'))

	this.clickToLocateDealer = function () {
		let self = this;
		return self.banner.isPresent().then(res => {
			if (res) {
				return self.buttonNo.click();
			}
		}).then(() => {
			return self.button.click();
		}).then(() => {
			return require('../page/dealerShipsPage');//зачем require нужен???
		})
	}
}

HomePage.prototype = BasePage;
module.exports = new HomePage();
