angular.module("pricing.services", [])

.factory("pricingSvc", function() {

	// pretend these came from some backend system
	var discountRate = 40;
	var discount = discountRate / 100;
	
	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}	
	
    function calculate(amt) {
    	if(!isNumber(amt)){
    	    return 1;
    	}else{
    	    return (discount * amt).toFixed(2);
    	}

    }	
    
	return {
		applyDiscount : calculate
	};
	
} );

