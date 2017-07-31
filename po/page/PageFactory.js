var homePage = require('./HomePage'),
    buildPage = require('./BuilderCarPage'),
    comparePage = require('./CompareVehiclesPage');
    dealershipsPage = require('./DealershipsPage')


var PageFactory = function () {
    var self = this;
    self.currentPage = 'undefined';

    self.getPage = function (name) {
        var pageMap = {
            'home': homePage,
            'build': buildPage,
            'compare': comparePage,
            'dealerships': dealershipsPage
        };
        return new pageMap[name];
    }
}

module.exports = new PageFactory();
