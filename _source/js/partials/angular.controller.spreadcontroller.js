function spreadCtrl($scope, $stateParams) {

    /* ------------------------------------
        Get correct arrays
    ------------------------------------ */
    var $object = $stateParams;

    var $node = $spreads.filter(function($node) {
        return $node.title == $stateParams.title;
    })[0];

    console.log("$object = " + JSON.stringify($object));
    console.log("$node   = " + JSON.stringify($node));


    /* ------------------------------------
        $scopes
    ------------------------------------ */
    $scope.title = $node.title;
}