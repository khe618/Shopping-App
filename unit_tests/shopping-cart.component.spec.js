describe('shoppingCart', function() {
	var ctrl, scope;
	beforeEach(module('shoppingApp'))
	beforeEach(inject(function($componentController, $rootScope){
		scope = $rootScope.$new()
		ctrl = $componentController('shoppingCart', {$scope: scope})
		//ctrl.shoppingCart = {"Star Wars Episode IV (DVD)": 0, "Star Wars Episode V (DVD)": 0, "Star Wars Episode VI (DVD)"}
		//ctrl.shoppingCartItems = Object.keys(ctrl.shoppingCart)
		
	}))
	
   	/*it('should create a `movies` model with 6 phones', inject(function($componentController) {
		ctrl = $componentController('shoppingCart')
		ctrl.shoppingCart = {"Star Wars Episode IV (DVD)": 0}
    		expect(Object.keys(ctrl.shoppingCart).length).toBe(1);
  	}));*/
	
	it('should return a list of items with a positive quantity in the shopping cart', function() {
		ctrl.shoppingCart["Star Wars Episode IV (DVD)"] = 1
    		expect(scope.itemsInCart().length).toBe(1);
  	})
	
	it('should return the total number of items in the shopping cart', function() {
		ctrl.shoppingCart["Star Wars Episode IV (DVD)"] = 1
		ctrl.shoppingCart["Star Wars Episode V (DVD)"] = 1
    		expect(scope.quantities()).toBe(2);
  	})
	
	it('should get the cost of an item times quantity', function() {
		ctrl.shoppingCart["Star Wars Episode IV (DVD)"] = 1
    		expect(scope.itemCost("Star Wars Episode IV (DVD)")).toBe(20);
  	})
	
	it('should get the cost of a list of items times their quantities', function() {
		ctrl.shoppingCart["Star Wars Episode IV (DVD)"] = 1
		ctrl.shoppingCart["Star Wars Episode V (DVD)"] = 1
		var items = ["Star Wars Episode IV (DVD)", "Star Wars Episode V (DVD)"]
    		expect(scope.costOfItems(items)).toBe(40);
  	})
	
	it('should get the cost all items times their quantities', function() {
		ctrl.shoppingCart["Star Wars Episode IV (DVD)"] = 1
		ctrl.shoppingCart["Star Wars Episode V (DVD)"] = 1
    		expect(scope.totalCost()).toBe(40);
  	})
	
	it('should all of the discounts listed as an array', function() {
		ctrl.shoppingCart["Star Wars Episode IV (DVD)"] = 100
		ctrl.shoppingCart["Star Wars Episode V (DVD)"] = 1
		ctrl.shoppingCart["Star Wars Episode VI (DVD)"] = 1
		var expectedResponse = ["DVD Discount: -$204.00", "Big Sale Discount: -$91.80",
			"Total Savings: $295.80", "Total Cost After Discounts: $1744.20"]
    		expect(scope.totalDiscounts()).toEqual(expectedResponse);
  	})
 });