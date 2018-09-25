angular.
  module('shoppingApp').
  component('shoppingCart', {
    templateUrl: 'shopping-cart.template.html',
    controller: function shoppingCartController($scope, movies, shoppingService){
		var self = this; //allows this to be passed to a scope function without calling that scope's this
		this.shoppingCart = shoppingService.getShoppingCart();
		this.shoppingCartItems = Object.keys(this.shoppingCart);
		this.dvds = shoppingService.getTitlesByFormat("DVD");
		this.blurays = shoppingService.getTitlesByFormat("Blu-Ray");
		
		$scope.shoppingService = shoppingService; 
		$scope.displayTwoDigits = displayTwoDigits
		
		/**
		 * Gets the items in the shopping cart that have a non-zero quantity
		 * @returns {Array<string>}: The list of movie titles in the cart
		 */
		$scope.itemsInCart = function(){
			return self.shoppingCartItems.filter(item => self.shoppingCart[item] > 0);
		}
		
		/**
		 * Gets the total number of items in the shopping cart
		 * @returns <number>: Number of items
		 */
		$scope.quantities = function(){
			var quantitiesArr = Object.values(self.shoppingCart);;
			return sum(quantitiesArr);
		}
		
		/** 
		 * Gets the price of a single item multiplied by its quantity
		 * @param {string} item: The title of the movie to get
		 * @returns {number}: price x quantity
		 */
		$scope.itemCost = function(item){
			return self.shoppingCart[item] * shoppingService.getPrice(item);
		}
		
		/**
		 * Gets the price of a list of items in the shopping cart multiplied by their quantity
		 * @param {Array<string>} items: A list of movie titles to get
		 * @returns {number}: Total cost of the list of items
		 */
		$scope.costOfItems = function(items){
			return sum(items.map(item =>  $scope.itemCost(item)));
		}
		
		/**
		 * Shorthand function for finding the cost of all items in the shopping cart 
		 * @returns{number}: Total cost of all items
		 */
		$scope.totalCost = function(){
			return $scope.costOfItems(self.shoppingCartItems);
		}
		
		/**
		 * Calculates the total discounts, and returns a list of strings describing 
		 * each discount
		 * @param {Array<string>} List of strings to be shown in the template
		 */
		$scope.totalDiscounts = function(){
			var discountList = [];
			var totalCost = $scope.totalCost();
			var totalDiscount = 0;
			var discount;
			var cartItems = $scope.itemsInCart();
			//All DVDs discount
			if (isSubarray(self.dvds, cartItems)){
				discount = $scope.costOfItems(self.dvds) * 0.1;
				totalDiscount += discount;
				discountList.push("DVD Discount: -$" + displayTwoDigits(discount)); 
			}
			//All Blu-Rays discount
			if (isSubarray(self.blurays, cartItems)){
				discount = $scope.costOfItems(self.blurays) * 0.15;
				totalDiscount += discount;
				discountList.push("Blu-Ray Discount: -$" + displayTwoDigits(discount)); 
			}
			
			totalCost -= totalDiscount;
			if ($scope.quantities() >= 100){
				discount = totalCost * 0.05;
				totalDiscount += discount;
				totalCost -= discount;
				discountList.push("Big Sale Discount: -$" + displayTwoDigits(discount));  
			}
			
			//display savings and cost after savings if there are discounts
			if (discountList.length > 0){
				discountList.push("Total Savings: $" + displayTwoDigits(totalDiscount));
				discountList.push("Total Cost After Discounts: $" + displayTwoDigits(totalCost));
			}
			return discountList;
		}
		
	}
  });