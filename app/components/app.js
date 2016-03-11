angular.module("happybazarApp", ["ui.router", "search.controllers", "productdisplay.controllers", "userAlerts.controllers", "search.services", "data.appData"])

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

	// intro page
    .state("welcome", {
        url: "/welcome",
        templateUrl: "App/components/main/partials/welcome.html"
    })
    
    // display results of user search
    .state("searchResults", {
        url: "/searchResults/:gameTitle",
        templateUrl: "App/components/search/partials/resultList.html",
        controller: "searchResultsController"
    })
    
    // after game selected, display info about it
    .state("productInfo", {
        url: "/productInfo/:productId",
        templateUrl: "App/components/productdisplay/partials/procuctDisplay.html",
        controller: "productDisplayController"
    });   
	

    $urlRouterProvider.otherwise("/welcome");
	
});
