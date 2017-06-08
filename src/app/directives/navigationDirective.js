var app = angular.module('demoApp')

app.directive("navigation", function () {
    return {
        restrict: 'E',
        templateUrl: '../app/directives/templates/navigation.html',
    };
});