var BasePage = require('./basePage');

function BuilderCarPage() {
	this.url = 'https://www.ford.com/showroom?linktype=build';
}

BuilderCarPage.prototype = BasePage;
module.exports = new BuilderCarPage();
