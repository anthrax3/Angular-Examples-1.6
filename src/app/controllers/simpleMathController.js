"use strict";

(function () {
    angular.module('demoApp').controller('simpleMathController', ['simpleMathService', simpleMathController]);

    function simpleMathController(simpleMathService) {
        var self = this;

        self.valueOne = 10;
        self.valueTwo = 5;

        self.multipledResult = function () {
            var result = simpleMathService.multiplicationExample(self.valueOne, self.valueTwo);

            return result
        };

        self.subtractedResult = function () {
            var result = simpleMathService.subtractionExample(self.valueOne, self.valueTwo);

            return result
        };

        return self;
    };
})();