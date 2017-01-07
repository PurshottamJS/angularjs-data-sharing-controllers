;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('second')
        .controller('SecondController', secondController);
    secondController.$inject = ['dataSharingService'];

    function secondController(dataSharingService) {
        var vm = this;
        vm.sharedData = dataSharingService
    }
}(window, angular, undefined));
