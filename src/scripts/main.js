(function () {

	require.config({
		baseUrl : "/assets/js/",

		paths : {
			'angular': '../vendor/js/angular.min',
			'angular-route' : '../vendor/js/angular-route.min',

			// Modules
			'appModule' : 'app.module',
		},

		shim: {
			'angular': {
				exports: 'angular'
			},
			'angular-route': {
				deps: ['angular'],

			}
		 },
	});

	define(function (require) {
		var angular = require('angular');

	   	angular.element(document).ready(function () {
	   		require('router');
	   		var appComponent = require('components/app.component');
	   		angular.bootstrap(document.documentElement, ["app"]);
	  	});
	});


})();