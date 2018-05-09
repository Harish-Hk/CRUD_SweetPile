myApp.controller('sweetController', function ($scope, $route, $routeParams, $http) {
	$scope.getSweet = function () {
		$http.get('/api/sweet/').then(function (response) {
			$scope.sweets = response.data;
		});
	};
	$scope.showSweet = function () {
		var id = $routeParams.id;
		$http.get('/api/sweet/' + id).then(function (response) {
			$scope.sweet = response.data;
		});
	};
	$scope.addSweet = function () {

		$http.post('/api/sweet/', $scope.sweet).then(function (response) {

			window.location.href = '#/sweet';
		});
	};
	$scope.updateSweet = function () {
		var id = $routeParams.id;
		$http.put('/api/sweet/' + id, $scope.sweet).then(function (response) {

			window.location.href = '#/sweet';
		});
	};
	$scope.deleteSweet = function (id) {
		var id = id;
		$http.delete('/api/sweet/' + id).then(function (response) {
			$route.reload();
		});
	};

});
