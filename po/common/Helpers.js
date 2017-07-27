var Helpers = function () {


	this.findAndScroll = function (element) {
		var self = this;
		return browser.wait(protractor.ExpectedConditions.presenceOf(element), 5000).then(() => {
			return browser.executeScript("arguments[0].scrollIntoView()", element);
		})
	}

	// return browser.wait(protractor.ExpectedConditions.presenceOf(self.results), 5000).then(() => {
	// 	return browser.executeScript("arguments[0].scrollIntoView()", self.results);
	// })
}

module.exports = new Helpers();
