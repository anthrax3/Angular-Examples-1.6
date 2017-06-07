var app = angular.module('demoApp')

app.directive("navigation", function () {
    return {
        restrict: 'E',
        templateUrl: 'navigation.html',
    };
});