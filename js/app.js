var app = angular.module('myApp', []);

app.controller('myController', function($scope){
	$scope.customers = [
	{ name: "Justin", city: "Salt Lake City"},
	{ name: "Jose", city:"Midvale"},
	{ name: "Maria", city:"Holliday"}
	];

	$scope.addCustomer = function(){
		$scope.customers.push({
			name: $scope.newCustomer.name,
			city: $scope.newCustomer.city
		});
	}
});