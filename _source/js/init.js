(function() {

    angular
        .module('myApp', ['ui.router', 'ngSanitize', 'ngAnimate'])
        .config(routes)
        .controller('mainCtrl', mainController)
        .controller('spreadCtrl', spreadCtrl)
        .factory('$markdown', markdownFtry);



    function stringToURL(t) {
        var text = t.replace(/[^\w\s]/gi, '').replace(/ /g, '-').toLowerCase();
        return text;
    }

    function fetchData() {
        var initInjector = angular.injector(["ng"]);
        var $http = initInjector.get("$http");

        return $http.get('content.yml').success(function(data) {
            var yml = jsyaml.load(data);
            var spreads = yml.spreads;

            for (i=0;i<spreads.length;i++) {
                spreads[i].url = stringToURL(spreads[i].title)
            }

            console.log(JSON.stringify(spreads));

            return $spreads = spreads;
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
