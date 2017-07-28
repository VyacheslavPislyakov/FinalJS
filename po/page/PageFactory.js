// var PAGE_OBJECT_MAP = {
//     "home": "./homePage",
//     "build": "./builderCarPage",
//     "compare": "./compareVehiclesPage"
// };
//
// module.exports.getPageObjects = function (pageName) {
//     return require(PAGE_OBJECT_MAP[pageName]);
// };


var homePage = require('./homePage'),
    buildPage = require('./builderCarPage'),
    comparePage = require('./compareVehiclesPage');


var PageFactory = function () {
    // this.currentPage = '';
    this.getPage = function (name) {
        var pageMap = {
            "home": homePage,
            "build": buildPage,
            "compare": comparePage
        };
        // this.currentPage = pageMap[name];
        return pageMap[name];
    }
}

module.exports = new PageFactory();
