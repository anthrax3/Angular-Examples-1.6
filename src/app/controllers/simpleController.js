"use strict";

(function () {
    angular.module('demoApp').controller('simpleController', []);

    function simpleController() {
        var self = this;

        self.testValue = "Test Value";

        self.updateValue = function () {
            self.testValue = "Test Value Updated";
        };

        return self;
    };
});