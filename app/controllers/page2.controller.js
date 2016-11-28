app.controller("page2Controller", ["$scope", page2Controller]);

function page2Controller($scope) {
	$scope.myValue = "Value for page2";
	$scope.myArray = [3,5,6,7,8];
}