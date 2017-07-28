var Helpers = function () {


	this.findAndScroll = function (element) {
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

	this.findAndScrollAndClick = function (element) {
		return this.findAndScroll(element).then(() => {
			return element.click();
		});
	}

	this.findAndScrollFalse = function (element) {
		// var self = this;
		return browser.wait(protractor.ExpectedConditions.visibilityOf(element), 5000).then(() => {
			return browser.executeScript("arguments[0].scrollIntoView(false)", element);
		})
	}

	this.findAndScrollAndGetTextFalse = function (element) {
		return this.findAndScrollFalse(element).then(() => {
			return element.getText().then(res => {
				return res;
			});
		})
	}

	this.findAndScrollAndClickFalse = function (element) {
		return this.findAndScrollFalse(element).then(() => {
			return element.click();
		});
	}
}

module.exports = new Helpers();
