var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/page1', {
		templateUrl: 'views/page1.html',
		controller: 'page1Controller'
	})
	.when('/page2', {
		templateUrl: 'views/page2.html',
		controller: 'page2Controller'
	})
	.when('/error', {
		template: '<div class="row"><div class="col-md-12"><div class="alert-info">OOPS!! Page not found</div></div></div>',
	});

	$routeProvider.otherwise('/page1');
});

app.controller('myCtrl', ['$scope', function($scope){
	$scope.testme = "Im from controller";
	$scope.showMe = function() {
		alert("Im from function");
	}
}]);

app.controller("anotherCtrl", ['$scope', anotherCtrl]);

function anotherCtrl($scope) {
	$scope.testme = "Im from another controller";
	$scope.myArray = ["abc", "def", "xyz"];
	$scope.anotherArray = [50,25,75,38,65,55];

	$scope.changeMe = function() {
		//$scope.myInput = "my value updated from function";
		$scope.myArray.push($scope.myInput);		
	}

	$scope.onLoad = function() {
		$scope.myInput = "On load - ng init";
	}
}