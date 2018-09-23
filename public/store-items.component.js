angular.
  module('shoppingApp').
  component('storeItems', {
    templateUrl: 'store-items.template.html',
    controller: function storeItemsController($scope, movies, shoppingService){
		this.movies = movies;
		
		/**
		 * Finds the value of the input field for the quanitity of items and adds
		 * that amount to the shopping cart
		 * @param {string} item: The title of the movie to be added
		 * @param {number} index: The index of the movie in movies.json. Used
		 * to find the id of the input field
		 * @returns None
		 */
		$scope.addItems = function(item, index){
			var inputId = "#input" + index;
			var quantity = parseInt($(inputId)[0].value);
			shoppingService.addItems(item, quantity);
		}
	}
  });