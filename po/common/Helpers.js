var Helpers = function () {


	this.findAndScroll = function (element) {
		// var self = this;
		return browser.wait(protractor.ExpectedConditions.presenceOf(element), 5000).then(() => {
			return browser.executeScript("arguments[0].scrollIntoView()", element);
		})
	}

	this.findAndScrollAndGetText = function (element) {
		return this.findAndScroll(element).then(() => {
			return element.getText().then(res => {
				return res;
			});
		})
	}
}

module.exports = new Helpers();
