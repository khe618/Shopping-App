describe('shoppingService', function() {
	var shoppingService;
	beforeEach(module('shoppingApp'))
	
  	beforeEach(inject(function (_shoppingService_) {
    		shoppingService = _shoppingService_;
  	}));
	
	it("should create a shopping cart with six items", function () {
		expect(Object.keys(shoppingService.shoppingCart).length).toBe(6)
	})
	
	it("should create a dictionary for movies.json", function(){
		expect(shoppingService.moviesDict["Star Wars Episode IV (DVD)"]).toBe(movies[0])
	})
	
	it("should add a specified quantity of an item to the shopping cart", function(){
		shoppingService.addItems("Star Wars Episode IV (DVD)", 5)
		expect(shoppingService.shoppingCart["Star Wars Episode IV (DVD)"]).toBe(5)
	})
	
	it("should remove all of one item from the shopping cart", function(){
		shoppingService.shoppingCart["Star Wars Episode IV (DVD)"] = 10
		shoppingService.removeItem("Star Wars Episode IV (DVD)")
		expect(shoppingService.shoppingCart["Star Wars Episode IV (DVD)"]).toBe(0)
	})
	
	it("should get the quantity of an item from the shopping cart", function(){
		shoppingService.shoppingCart["Star Wars Episode IV (DVD)"] = 10
		expect(shoppingService.getItem("Star Wars Episode IV (DVD)")).toBe(10)
	})
	
	it("should return the entire shopping cart as an object", function(){
		expect(shoppingService.getShoppingCart()).toBe(shoppingService.shoppingCart)
	})
	
	it("should get the price of a movie", function(){
		expect(shoppingService.getPrice("Star Wars Episode IV (DVD)")).toBe(20)
	})
	
	it("should get the photoURL of a movie", function(){
		expect(shoppingService.getPhotoURL("Star Wars Episode IV (DVD)")).toBe("imgs/star_wars_4_dvd.jpg")
	})
	
	it("should get all of the movies of a specified format", function(){
		var dvds = ["Star Wars Episode IV (DVD)", "Star Wars Episode V (DVD)", "Star Wars Episode VI (DVD)"]
		expect(shoppingService.getTitlesByFormat("DVD")).toEqual(dvds)
	})
	
 });