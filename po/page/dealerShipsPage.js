var BasePage = require('./basePage');

function DealerShipsPage() {
	this.url = 'https://www.ford.com/dealerships/';
}

DealerShipsPage.prototype = BasePage;
module.exports = new DealerShipsPage();
