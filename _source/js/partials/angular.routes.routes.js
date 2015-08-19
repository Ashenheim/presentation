function routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise($spreads[0].title);

    $stateProvider
        .state('spreads', {
            url: '/:title',
            views: {
                '@': {
                    templateUrl:  'templates/spread.tpl.html',
                    controller: 'spreadCtrl'
                }
            }
        })
}