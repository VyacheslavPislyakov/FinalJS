// var BasePage = function () {
// 	this.visit = function () {
// 		browser.waitForAngularEnabled(false).then(() => {
// 			return browser.get(this.url);
// 		});
// 	};
// };
//
// module.exports = BasePage;


var BasePage = function(){};

BasePage.prototype.url = "";

BasePage.prototype.visit = function () {
	return browser.waitForAngularEnabled(false).then(() =>{
		return browser.get(this.url);
	});
};

module.exports = BasePage;
