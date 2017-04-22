(function () {

	require.config({
		baseUrl : "/assets/js/",

		paths : {
			'angular' : '../vendor/js/angular.min',
		},

		shim : {
			'angular' : {
				exports: 'angular',
			},
		}

	});


	define(function (require) {
		require('app.module');
		require('components/app.component');
	})
})();