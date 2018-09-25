
describe('storeItems', function() {
	beforeEach(module('shoppingApp'))
	/*var createService, scope, ctrl;
	var mockShoppingService = {
		shoppingCart: {
			"Star Wars Episode IV (Blu-Ray)": 0
		},
		addItems : function(item, quantity){
			this.shoppingCart[item] += quantity;
		}
	}
	
	beforeEach(module('shoppingApp', function ($provide) {
  		$provide.value('shoppingService', mockShoppingService);
	}));
	
	beforeEach(function() {
		
    		var dom = '<select id="input1" value=5></select>';
    		document.body.insertAdjacentHTML(
      		'afterbegin', 
      	dom);
 	});
	
	beforeEach(inject(function($componentController, $rootScope) {
	  scope = $rootScope.$new();
	  ctrl = $componentController('storeItems', {$scope: scope})
    }));
	

  	afterEach(function() {
    		document.body.removeChild(document.getElementById('input1'));
  	});
	*/
	
   	it('should create a `movies` model with 6 phones', inject(function($componentController) {
		ctrl = $componentController('storeItems')
    		expect(ctrl.movies.length).toBe(6);
  }));
	
	/*it('should create a `movies` model with 6 phones', inject(function($componentController) {
		scope.addItems("Star Wars Episode IV (Blu-Ray)", 1)
    		expect(mockShoppingService.shoppingCart["Star Wars Episode IV (Blu-Ray)"]).toBe(5)
  	}));*/
	
 });