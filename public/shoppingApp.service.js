/*shoppingService defines the shoppingCart object, which is used to transfer data between 
the storeItemsController and the shoppingCartController. It also provides getters and setters
for shoppingCart, as well as utility functions for accessing movies.json data */

angular.
	module("shoppingApp").
		service("shoppingService", function(movies){
			this.shoppingCart = {}; //dictionary where keys are movie titles and values are the amount the user has bought
			this.moviesDict = {}; //converts array in movies.json to an easier to access dictionary
			
			//initialize shoppingCart and moviesDict
			for (var movie of movies){
				this.shoppingCart[movie.displayName]  = 0;
				this.moviesDict[movie.displayName] = movie;
			}
			
			/**
			 * Add a certain amount of one item to the shopping cart
			 * @param {string} item: The title of the movie to add
		  	 * @quantity {number} quantity: An integer amount of items to add
			 * @return None
			 */
			this.addItems = function(item, quantity){
				this.shoppingCart[item] += quantity;
			}
			
			/**
			 * Remove all of one item from the shopping cart
			 * @param{string} item: The title of the movie to remove
			 * @return None
			 */
			this.removeItem = function(item){
				this.shoppingCart[item] = 0;
			}
			
			/**
			 * Gets the quantity of an item in the shopping cart
			 * @param {string} item: The title of the movie to get
			 * @return {number}: The amount of that item in the shopping cart
			 */
			this.getItem = function(item){
				return this.shoppingCart[item];
			}
			
			/**
			 * Returns the entire shopping cart object
			 *@return {Object} The shopping cart
			 */
			this.getShoppingCart = function(){
				return this.shoppingCart;
			}
			
			/**
			 * Gets the price of a movie
			 * @param {string} item: The title of the movie to get
			 * @return {number} The price of the movie
			 */
			this.getPrice = function(item){
				return this.moviesDict[item].price;
			}
			
			/**
			 * Gets the photo URL of a movie cover
			 * @param {string} item: The title of the movie to get
			 * @ return {string} The photo URL 
			 */
			this.getPhotoURL = function(item){
				return this.moviesDict[item].photoURL;
			}
			
			/**
			 * Gets all of the movie titles of a certain format
			 * @param{string} format: The format (DVD, Blu-Ray)
			 * @return {Array<string>} A list of movies with the specified format
			 */
			this.getTitlesByFormat = function(format){
				return movies.
								filter(movie => movie.format === format).
									map(movie => movie.displayName)
			}
		})