"use strict";

(function () {
    angular.module('demoApp').controller('filteringController', filteringController);

    function filteringController() {
        var self = this;

        self.filterText = "";

        self.items = [
            { name: 'Tim McClane', location: "United States of America" },
            { name: 'Danielle Tucker', location: "United Kingdom" },
            { name: 'Ben Godwan', location: "Japan" },
            { name: 'Roberto Campbella', location: "Italy" },
            { name: 'Benjami Kella', location: "South Africa" },
        ];

        return self;
    };
})();