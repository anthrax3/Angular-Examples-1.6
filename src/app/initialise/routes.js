"use strict";

var app = angular.module('demoApp', ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/view1',
        {
            controller: 'simpleController',
            templateUrl: '../views/view1.html'
        })
        .otherwise({ redirectTo: '/view1' });
});