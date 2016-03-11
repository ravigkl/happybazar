angular.module("productdisplay.controllers", ["productdisplay.services"])

.controller("productDisplayController", ["$scope", "$stateParams", "productDisplaySvc", function($scope, $stateParams, productDisplaySvc){
	$scope.results = productDisplaySvc.getDetails($stateParams.productId);
}]);
