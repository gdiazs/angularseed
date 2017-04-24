(function () {
	'use strict';

	define(function (require) {
		var appModule = require('app.module');

		var sampleComponent = appModule.component('home', {
			template: '<h1>Welcome Dashboard</h1>',
			
		});

		return sampleComponent;


	});
})();