function spreadCtrl($scope, $stateParams, $markdown, $http) {

    /* ------------------------------------
        Get correct arrays
    ------------------------------------ */
    var $object = $stateParams;

    var $node = $spreads.filter(function($node) {
        return $node.title == $stateParams.title;
    })[0];


    /* ------------------------------------
        Variable generations
    ------------------------------------ */

    $file = "This will be the file"; //@TODO

    /* ------------------------------------
        $scopes
    ------------------------------------ */
    $scope.title   = $node.title;
    $scope.file    = $file;

    $http.get('articles/text.md')
        .success(function(data) {
            $scope.content = $markdown(data);
        })
        .error(function(err) {
            $scope.content = err;
        });
}
