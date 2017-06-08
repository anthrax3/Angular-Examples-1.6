var app = angular.module('demoApp')

app.directive("loading", function () {
    return {
        restrict: 'E',
        template: '<div class="loading-spinner-wrapper"><div class="loading-spinner"></div></div>',
    };
});