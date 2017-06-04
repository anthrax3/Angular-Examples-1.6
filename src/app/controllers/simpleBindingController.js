"use strict";

(function () {
    angular.module('demoApp').controller('simpleBindingController', simpleBindingController);
    
    function simpleBindingController() {
        var self = this;

        self.testValue = "Test Value";

        self.updateValue = function () {
            self.testValue = "Test Value Updated";
        };

        return self;
    };
})();