(function () {

	require.config({
		baseUrl : "/assets/js/",

		paths : {
			'angular': '../vendor/js/angular.min',
			'angularRoute' : '../vendor/js/angular-route.min',

			// Modules
			'appModule' : 'app.module',
		},

		shim: {
			'angular': {
				exports: 'angular'
			},
			'angularRoute': {
				exports: 'angularRoute',
				deps: ['angular'],
			},
		 },
	});

	require(['angular','router','components/app.component'], function (angular,router,appComponent) {
	   	angular.element(document).ready(function () {
	   		angular.bootstrap(document.documentElement, ["app"]);
	  	});
	});



})();