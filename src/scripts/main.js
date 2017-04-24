(function () {

	require.config({
		baseUrl : "/assets/js/",

		paths : {
			'angular' : '../vendor/js/angular.min',
			'angular-route' : '../vendor/js/angular-route.min',
		},

		shim : {
			'angular' : {
				exports: 'angular',
			},

			'angular-route': {
				deps: ['angular'],
			}
		},
	    priority: [
	        "angular"
	    ]

	});


	define(function (require) {

		var angular = require('angular');

		angular.element(document).ready(function () {
			require('components/app.component');
		});

	});
})();