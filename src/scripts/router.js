(function () {
	'use strict';

	define(function (require) {
		var appModule = require('app.module');
		require('components/home/home.component');

		appModule.config(function ($routeProvider) {
			
			$routeProvider
			.when('/', {
				template: '<home></home>',
			});

		});
	});

})();