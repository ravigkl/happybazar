angular.module("messaging.services", [])

.factory("messageSvc", [ "$rootScope", function($rootScope) {

	function displayMsg(msg) {
		$rootScope.$broadcast("userMessage", msg);	
	};	 
	
	return {
		displayMsg : displayMsg
	};
	
} ] );