var BasePage = require('./basePage');

function ShoppingPlannerPage() {
	this.url = 'https://www.ford.com/account/shoppingplanner/#/';
}

ShoppingPlannerPage.prototype = BasePage;
module.exports = new ShoppingPlannerPage();
