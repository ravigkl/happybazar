angular.module("productdisplay.services", [ "data.appData", "pricing.services" ])

	.factory("productDisplaySvc",
		[ "productData", "pricingSvc", function(productData, pricingSvc) {

			function getDetailsById(id) {

				if (!(productData && productData.usedGames)){
					return null;
				}
				
				if (typeof productData.usedGames.filter != "function") {
					return null;
				}
			
				var gamesFound = productData.usedGames.filter(function(game) {
					return game.productId == id;
				});
				
				if (!gamesFound.length) {
					return null;
				}
				
				var gameFound = gamesFound[0];
				
				return {
					name : gameFound.name,
					productId : gameFound.productId,
					summary : gameFound.summary,
					url : gameFound.url,
					price : pricingSvc.applyDiscount(gameFound.price)
				};

			}

			return {
				getDetails : getDetailsById
			};

		} 
]);
