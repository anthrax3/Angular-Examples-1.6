"use strict";

(function () {
    angular.module('demoApp').controller('growingListController', growingListController);

    function growingListController() {
        var self = this;

        self.items = [
            { headline: 'Item 1', description: "This is the first item", body: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. " },
            { headline: 'Item 2', description: "This is the second item", body: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. " },
            { headline: 'Item 3', description: "This is the third item", body: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. " },
        ];

        self.headline = "";
        self.description = "";
        self.body = "";

        self.addItem = function () {
            self.items.push({ headline: self.headline, description: self.description, body: self.body })
        }

        return self;
    };
})();