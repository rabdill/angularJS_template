app = angular.module('myCoolApp', [
	'ngRoute',
	'myCoolControllers'
]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'views/main.html',
			controller: 'IndexCtrl'
		}).
		otherwise({redirectTo: '/'});
}]);

app.config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
