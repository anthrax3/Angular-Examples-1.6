var app = angular.module('demoApp', ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/view1',
        {
            templateUrl: '../views/view1.html'
        })
        .when('/view2',
        {
            templateUrl: '../views/view2.html'
        })
        .otherwise({ redirectTo: '/view1' });
});

console.log("-> Routes Loaded.");