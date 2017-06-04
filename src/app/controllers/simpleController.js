"use strict";

angular.module('demoApp').controller('simpleController', []);

function simpleController()
{
    var self = this;

    self.testValue = "Test Value";

    self.UpdateValue = function()
    {
        self.testValue = "Test Value Updated";
    };
    
    return self;
};