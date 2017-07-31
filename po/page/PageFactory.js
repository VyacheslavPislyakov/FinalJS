var homePage = require('./HomePage'),
    buildPage = require('./BuilderCarPage'),
    comparePage = require('./CompareVehiclesPage');
    dealershipsPage = require('./DealershipsPage')


var PageFactory = function () {
    // this.currentPage = '';
    var self = this;
    self.currentPage = 'undefined';

    self.getPage = function (name) {
        var pageMap = {
            'home': homePage,
            'build': buildPage,
            'compare': comparePage,
            'dealerships': dealershipsPage

        };
        // self.currentPage = new pageMap[name].then(() => {
        //     console.log(pageMap[name]);
        // })
        // return self.currentPage;
        return new pageMap[name];
    }
}

module.exports = new PageFactory();


// var PageFactory = function(){
//     var _this = this;
//     _this.currentPage = 'undefined';
//
//     _this.getPage = function(name) {
//         var pages = {
// 			'home': require('./HomePage.js'),
//             'compare': require('./compareVehiclesPage'),
//             'dealerships': require('./dealershipsPage'),
//         };
//
//
//         if(!pages[name]) {
//             throw new Error('No such page: ' + name);
//         }
//         _this.currentPage = new pages[name];
//
//         console.log("11111111111111111" + _this.currentPage);
//         // return _this.currentPage;
//         return new pages[name];
//     };
// };
//
// module.exports = new PageFactory();
