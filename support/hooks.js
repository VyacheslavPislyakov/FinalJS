// module.exports = function () {
//     this.After(function () {
//         return browser.executeScript('window.localStorage.clear();')
//             .then(function () {
//                 browser.manage().deleteAllCookies();
//             });
//     });
//
// };

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({After}) {
	After(function() {
        return browser.executeScript('window.localStorage.clear();')
        .then(function () {
            browser.manage().deleteAllCookies();
        });
	});
});