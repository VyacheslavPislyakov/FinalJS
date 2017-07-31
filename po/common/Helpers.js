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


	// this.getterElement = function (elements){
	// 	var el;
	// 	if (elements.locator == 'id') {
	// 		el = elements.isSingle ? global.element(by.id(elements.value)) : global.element.all(by.id(elements.value));
	// 	}
	//
	// 	if (elements.locator == 'css') {
	// 		el = elements.isSingle ? global.element(by.css(elements.value)) : global.element.all(by.css(elements.value));
	// 	}
	//
	// 	return el;
	// }

	this.getElementById = function (element) {
		return global.element(by.id(element));
	}

	this.getElementsById = function (element) {
		return global.element.all(by.css(element));
	}

	this.getElementByCSS = function (element) {
		return global.element(by.css(element));
	}

	this.getElementsByCSS = function (element) {
		return global.element.all(by.css(element));
	}


}


module.exports = new Helpers();
