module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
	  './node_modules/angular/angular.js',                             // angular
    	  './node_modules/angular-ui-router/release/angular-ui-router.js', // ui-router
      './node_modules/angular-mocks/angular-mocks.js',
	  'public/movies.json',
	  'public/index.js',
	  'public/shoppingApp.service.js',
	  'public/store-items.component.js',
	  'public/shopping-cart.component.js',
	  'unit_tests/shoppingApp.service.spec.js',
      'unit_tests/store-items.component.spec.js',
	  'unit_tests/shopping-cart.component.spec.js'
    ],
	singleRun: false
  })
}