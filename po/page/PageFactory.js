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
