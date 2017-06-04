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
        .otherwise({ redirectTo: '/simpleBinding' });
});