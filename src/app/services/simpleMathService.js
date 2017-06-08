'use strict';

(function () {
    angular.module('demoApp').factory('simpleMathService', simpleMathService);

    function simpleMathService() {
        var service = {
            multiplicationExample(valueOne, valueTwo) {
                var multipliedValue = valueOne * valueTwo;

                return multipliedValue;
            },
            subtractionExample(valueOne, valueTwo) {
                var subtractedValue = valueOne - valueTwo;

                return subtractedValue;
            }
        };

        return service;
    }
})();