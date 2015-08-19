(function() {

    angular
        .module('myApp', ['ui.router', 'ngSanitize', 'ngAnimate'])
        .config(routes)
        .controller('mainCtrl', mainController)
        .controller('spreadCtrl', spreadCtrl)
        .factory('$markdown', markdownFtry);

    function fetchData() {
        var initInjector = angular.injector(["ng"]);
        var $http = initInjector.get("$http");

        return $http.get('spreads.json').success(function(data) {
            return $spreads = data.spreads;
        });
    }

    function bootstrapApp() {
        return angular.element(document).ready(function() {
            angular.bootstrap(document, ['myApp']);
        });
    }

    // Load Angular after retrieving data
    fetchData().then(bootstrapApp);

})();
