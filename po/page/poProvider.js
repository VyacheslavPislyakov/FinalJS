var PAGE_OBJECT_MAP = {
    "home": "./homePage",
    "shoppingPlannerPage": "./shoppingPlannerPage",
    "builderCar": "./builderCarPage"
};

module.exports.getPageObjects = function (pageName) {
    return require(PAGE_OBJECT_MAP[pageName]);
};
