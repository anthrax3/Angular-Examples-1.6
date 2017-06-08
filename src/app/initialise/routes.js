"use strict";

var app = angular.module('demoApp', ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/simpleBinding',
        {
            controller: 'simpleBindingController',
            controllerAs: 'ctrl',
            templateUrl: '../views/simpleBinding.html'
        })
        .when('/growingList',
        {
            controller: 'growingListController',
            controllerAs: 'ctrl',
            templateUrl: '../views/growingList.html'
        })
        .when('/simpleMath',
        {
            controller: 'simpleMathController',
            controllerAs: 'ctrl',
            templateUrl: '../views/simpleMath.html'
        })
        .otherwise({ redirectTo: '/simpleBinding' });
});