var myCoolControllers = angular.module('myCoolControllers', [
	'ngRoute'
]);

myCoolControllers.controller('IndexCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.thing = "la la la";
}]);
