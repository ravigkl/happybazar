angular.module("userAlerts.controllers", [])

.controller("userAlertsController", ["$scope", "$rootScope", "$timeout", function($scope, $rootScope, $timeout){
    $rootScope.$on("userMessage", function(e, msg){
        $scope.msg = msg;
    
        $timeout(function() {
        	$scope.msg = null;
        }, 2000); 
    
    });	
}]);