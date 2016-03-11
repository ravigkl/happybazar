angular.module("search.controllers", ["search.services"])

.controller("searchController", ["$scope", "$state", function($scope, $state){
	$scope.search = function() {
		$state.go("searchResults", { gameTitle:$scope.game.name } );
	};
}])

.controller("searchResultsController", ["$scope", "$stateParams", "searchSvc", function($scope, $stateParams, searchSvc){
	$scope.results = searchSvc.search($stateParams.gameTitle);
}]);
