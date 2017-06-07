//(function () {
    var app = angular.module('demoApp')

    app.directive("siteNavigation", function () {
        return {
            restrict: 'E',
            template: "<p>Hello</p>"
        };
    });

    //function siteNavigation() {
    //    return {
    //        restrict: 'E',
    //        template: '<p>Hello</p>'
    //        //templateUrl: function (elem, attr) {
    //        //    alert("HI");
    //        //    var templatename = attr.templatename;
    //        //    if (templatename === undefined) {
    //        //        templatename = 'siteNavigation';
    //        //    }

    //        //    return '/template?name=' + templatename;
    //        //}
    //    };
//    };
//})()