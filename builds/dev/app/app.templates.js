(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/first/first.template.html',
    '<div class="container">\n' +
    '    <div class="page-header">\n' +
    '        <h1>Angular Data Sharing Controllers Example</h1>\n' +
    '        <h2>First Controller</h2>\n' +
    '    </div>\n' +
    '    <div>\n' +
    '        <form>\n' +
    '            <div class="form-group">\n' +
    '                <input type="text" class="form-control" id="" ng-model="first.sharedData.data">\n' +
    '                <hr>\n' +
    '                {{first.sharedData.data}}\n' +
    '            </div>\n' +
    '            <button type="button" class="btn btn-primary" ui-sref="second">Go To Second Controller</button>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/second/second.template.html',
    '<div class="container">\n' +
    '    <div class="page-header">\n' +
    '        <h1>Angular Data Sharing Controllers Example</h1>\n' +
    '        <h2>Second Controller</h2>\n' +
    '    </div>\n' +
    '    <div>\n' +
    '        <form>\n' +
    '            <div class="form-group">\n' +
    '                <input type="text" class="form-control" id="" ng-model="second.sharedData.data">\n' +
    '                <hr>\n' +
    '                {{second.sharedData.data}}\n' +
    '            </div>\n' +
    '            <button type="button" class="btn btn-primary" ui-sref="first">Go To First Controller</button>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();
