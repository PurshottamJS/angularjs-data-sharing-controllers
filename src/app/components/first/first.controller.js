;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('first')
        .controller('FirstController', firstController);
    firstController.$inject = ['dataSharingService'];

    function firstController(dataSharingService) {
        var vm = this;
        vm.sharedData = dataSharingService
    }
}(window, angular, undefined));
