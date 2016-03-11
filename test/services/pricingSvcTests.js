(function() {

	var injector = angular.injector([ 'ng', 'gamesearchApp' ]); // ng and the name of our app

	module("Pricing Service Tests", {
		beforeEach: function() {
			this.PricingSvc = injector.get("pricingSvc");
	    }
	});	
	
	
	test("Pricing Calculations", function() {
		var price = this.PricingSvc.applyDiscount(10.00);
		strictEqual(price, "4.00", "When the regular price is $10.00, the discounted price should be $4.00");
	});		

		

})();