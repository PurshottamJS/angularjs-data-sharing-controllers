;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('common')
        .service('dataSharingService', DataSharingService);
    DataSharingService.$inject = [];

    function DataSharingService() {
        var dataSharingService = this;
        dataSharingService.data = "Default data from service"
    }
}(window, angular, undefined));
