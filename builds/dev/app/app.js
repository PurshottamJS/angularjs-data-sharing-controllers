;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app', ['app.templates','ui.router', 'first','second','common'])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('common', [])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('first', [])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('second', [])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app')
        .config(config);
    config.$inject = ['$stateProvider','$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/first');
        $stateProvider.state("first", {
            url: "/first",
            controller: "FirstController as first",
            // this is the place where to resolve dynamic template
            templateProvider: function($templateCache) {
                // simplified, expecting that the cache is filled
                // there should be some checking... and async $http loading if not found
                return $templateCache.get('components/first/first.template.html');
            }
        })
        $stateProvider.state("second", {
            url: "/second",
            controller: "SecondController as second",
            templateProvider: function($templateCache) {
                return $templateCache.get('components/second/second.template.html');
            }
        })
    }
}(window, angular, undefined));

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
