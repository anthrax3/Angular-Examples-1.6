"use strict";

(function () {
    angular.module('demoApp').controller('growingListController', growingListController);

    function growingListController() {
        var self = this;

        self.items = [
            { headline: 'Item 1', body: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. " },
            { headline: 'Item 2', body: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. " },
            { headline: 'Item 3', body: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. " },
        ];

        self.headline = "";
        self.body = "";

        self.submit = function () {
            self.items.push({ headline: self.headline, body: self.body })

            self.headline = "";
            self.body = "";
        };

        return self;
    };
})();