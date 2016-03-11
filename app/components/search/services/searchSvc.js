angular.module("search.services", ["data.appData", "messaging.services"])

.factory("searchSvc", [ "productData", "messageSvc", function(productData, messageSvc) {

	function searchByTitle(title) {

		if( !(title && ( typeof title.trim == "function" )) ) {
			  return [];			  
		}

		if( !(productData && productData.usedGames && (typeof productData.usedGames.filter == "function")) ) {
			return [];
		}

		var loweredTitle = title.trim().toLowerCase();

		var gamesFound = productData.usedGames.filter( function(game) {
			return game.name.toLowerCase().indexOf(loweredTitle) > -1;
		});

		// new user msg for lookup outcome
		messageSvc.displayMsg(createResultsMsg(gamesFound.length));

		return gamesFound;
	}


	function createResultsMsg(resultSize) {
		var quantifier = resultSize > 0 ? resultSize : "No";
		var noun = resultSize === 1 ? "game" : "games";
		var terminator = resultSize > 0 ? "!" : ".";
		
		return quantifier + " " + noun + " found" + terminator;
	}


	return {
		search : searchByTitle
	};
	
} ]);


