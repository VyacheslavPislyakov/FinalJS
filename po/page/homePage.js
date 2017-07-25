var BasePage = require('./basePage')

function HomePage() {
	this.url = 'http://www.ford.com/';
}

HomePage.prototype = BasePage;
module.exports = new HomePage();
