var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'sweetController'
		})
		
		.when('/sweet', {
			templateUrl: 'templates/list.html',
			controller: 'sweetController'
		})
		.when('/sweet/create', {
			templateUrl: 'templates/add.html',
			controller: 'sweetController'
		})
		.when('/sweet/:id/update', {
			templateUrl: 'templates/edit.html',
			controller: 'sweetController'
		})
		.when('/sweet/:id/read', {
			templateUrl: 'templates/show.html',
			controller: 'sweetController'
		});
});
